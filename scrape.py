import sys
from subprocess import check_output, CalledProcessError
from multiprocessing import Process, Queue
from Queue import Empty

machinesCounts = [
  ('matrix', 44),
  ('line', 38),
  ('cider', 6),
  ('graphic', 30),
  ('ray', 40),
  ('point', 60),
  ('voxel', 27)]

def allLabMachines():
  ret = ''
  for (name, num) in machinesCounts:
    for i in range(1,num):
      istr = str(i)
      if (i < 10):
        istr = '0'+str(i)
      ret+= name+istr + '\n'
  return ret


def sshOne(machine, command, queue):
  try:
    out = ""
    out = check_output(['ssh', '-o', 'StrictHostKeyChecking=no',
        '-o ConnectTimeout=5', machine, command])
  except CalledProcessError:
    out = ""
  finally:
    queue.put(out)

TIMEOUT = 10

def sshAll(command):
  machines = allLabMachines().split('\n')
  processes = []
  q = Queue()
  for machine in machines:
    p = Process(target=sshOne, args = (machine, command, q))
    processes.append(p)

  for process in processes:
    process.start()

  output = ""
  i = 1
  for process in processes:
    process.join(TIMEOUT)
    try:
      output += q.get(timeout=TIMEOUT)
    except Empty:
      pass
    i += 1
    print(str(i) +  '/' +  str(len(processes)))

  return output

def process(allData):
  out = {}
    for line in allData.split('\n'):
      line = line.split()
      user = line[0]
      active = '.' in line[1]
      process = line[2].split('/')[-1]
      if (active):
        if (user in out):
          if (process in out[user]):
            out[user][process] += 1
          else:
            out[user][process] = 1
        else:
          out[user] = {process: 1}
  return out

COMMAND = 'w | tail -n +3 | awk \'{print $1, $5, $8}\''

if __name__ == '__main__':
  print (sshAll(COMMAND))

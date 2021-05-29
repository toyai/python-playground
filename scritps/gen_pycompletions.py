import builtins
import inspect
import keyword
import json

PYTHON_JSON_FILE = './src/components/codemirror/python.json'


def get_builtins(check):
  names = {}
  for k, v in sorted(builtins.__dict__.items()):
    if check(v) and not k.startswith('_'):
      names[k] = inspect.getdoc(v)

  return names


with open(PYTHON_JSON_FILE, 'w') as f:
  py_builtins = {
      'keywords': sorted(keyword.kwlist),
      'builtInFunctions': get_builtins(inspect.isbuiltin),
      'builtInClasses': get_builtins(inspect.isclass),
  }
  json.dump(py_builtins, f)

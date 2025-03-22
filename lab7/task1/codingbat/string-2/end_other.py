def end_other(a, b):
  a, b = a.lower(), b.lower()
  return a.endswith(b) or b.endswith(a)

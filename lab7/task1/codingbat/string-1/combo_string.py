def combo_string(a, b):
  len1 = len(a)
  len2 = len(b)
  if len1 <= len2:
    return a + b + a
  else:
    return b + a + b


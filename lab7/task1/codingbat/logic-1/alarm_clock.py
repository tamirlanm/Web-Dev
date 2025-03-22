def alarm_clock(day, vacation):
  if day in [1, 2, 3, 4, 5]:  
    return "10:00" if vacation else "7:00"
  else:  
    return "off" if vacation else "10:00"

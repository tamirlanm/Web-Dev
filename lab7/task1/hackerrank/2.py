#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    if n % 2 != 0:
        print("Weird")
    if n > 1 and n < 6 and n % 2 == 0:
        print("Not Weird")
    if n > 5 and n <= 20 and n % 2 == 0:
        print("Weird")
    if n>20 and n % 2 == 0:
        print("Not Weird")
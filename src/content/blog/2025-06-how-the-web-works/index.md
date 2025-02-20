---
title: "How The Web Works"
description: "The learning note of how the web works"
date: "2025-02-20"
---

## A. Network Protocols

Network protocols are standard rules that govern how data is being transmitted between devices on a network. It defines the message formats, ordering of the message exchanges, and the expected response.

Network protocols are like the language & grammar of the internet to ensure that different devices and systems can understand each other.

![Network Protocols](/how-the-web-works/network-protocols.png)

### A.1. TCP

Ensures **reliable order delivery of data** between applications.
1. Breaking data into packets
2. Acknowledging received packets
3. Retransmitting lost packets

![TCP](/how-the-web-works/tcp.png)

### A.2. IP

Responsible for **addressing and routing packets** across the internet.

Every devices on the internet has their own IP address which acts like a postal address for the data packets.

![IP](/how-the-web-works/ip.png)

### A.3. HTTP

Defines how messages are formatted and transmitted between web browsers and servers.

When you type a URL in your browser, you are essentially sending an HTTP request to a web server.

![HTTP](/how-the-web-works/http.png)

## B. The Internet Protocols Stack (TCP/IP)

TCP/IP stack is a conceptual framework that standardize the protocols used for communication over the internet. This stack typically consists of 4 layers.

### B.1. Application Layer

This is a layer that is the closest to the end user and interacts directly with software applications. 

Protocols included in this layer:
- HTTP for web browsing
- SMPT for email
- FTP for file transfers

![Application Layer](/how-the-web-works/tcp-ip-application-layer.png)

### B.2. Transport Layer

Ensures reliable data transfers between applications. 

Protocols included in this layer:
- TCP for reliable data transfer
- UDP for faster but less reliable data transfer

![Transport Layer](/how-the-web-works/tcp-ip-transport-layer.png)

### B.3. Network Layer (IP)

Handles the addressing and routing of data packets across different networks.

Protocols included in this layer:
- IPv4
- IPv6

Both protocols define how data should be packetized, addressed, transmitted, routed, and received.

![Network Layer](/how-the-web-works/tcp-ip-network-layer.png)

### B.4. Link Layer

Manages the physical connection between devices on the same network segment. This layer deals with the hardware aspects of network communication including Network Interface Cards (NIC) and device drivers.

![Link Layer](/how-the-web-works/tcp-ip-link-layer.png)

### B.5. Summary of the Internet Protocols Stack

These 4 layers work together to enable communication across network.

1. When you send data, it starts from the Application Layer and moves down through each layer.
2. Each layer adds its own information to the data (a.k.a. Encapsulation).
3. When the data reaches its destination, it moves up through the layer with each layer is stripping off its information (a.k.a. Decapsulation).

![Summary of the Internet Protocols Stack](/how-the-web-works/tcp-ip-summary.png)

## References

1. YouTube: [How the Internet Works in 9 Minutes](https://www.youtube.com/watch?v=sMHzfigUxz4) by [ByteByteGo](https://www.youtube.com/@ByteByteGo)
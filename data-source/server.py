#!/usr/bin/env python
#
# A simple single threaded web server which provides a random number
# Single threadedness is important because we want to simulate scaling by multiple workers

from SimpleHTTPServer import SimpleHTTPRequestHandler
from BaseHTTPServer import HTTPServer
import json
from random import randint
from time import sleep

class RequestHandler(SimpleHTTPRequestHandler):
    
    def do_GET(self):
    # GET request handler - provide a random number after a bit of delay
    
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            
            work_time=float(randint(20,180))/1000;
            sleep(work_time) # This enables the server to respond every ~100ms ~ 10TPS max per system
            
            rnd=randint(1,100)
            response=json.dumps(rnd)
            self.send_header('Content-length', len(response))
            self.end_headers()
            self.wfile.write(response)
            print 'Got request from '+self.client_address[0]+' sent response '+response
        else: 
            self.send_response(404)

        
server = HTTPServer(('', 8080), RequestHandler)
server.serve_forever()

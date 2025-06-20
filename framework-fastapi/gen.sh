#!/bin/bash
python app/save_openapi.py
speakeasy generate sdk --schema openapi.json --lang python --out ./sdk
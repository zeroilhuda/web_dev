from django.shortcuts import render
import requests
from bs4 import BeautifulSoup

# Create your views here.
URL = "https://en.wikipedia.org/wiki/Template:COVID-19_pandemic_data"

country_names = []
total_cases = []
total_deaths = []
combined_cases = []

def fetch():
    page = requests(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    row = soup.find_all("table")
    row = row.find("tbody")
    row = row.find_all("tr")[:-1]

    for i in range(1, 100):
        th = row[i].find("th")
        country_names.append(th.text.strip())
        tds = row[i].find_all("td")[1:]
        total_cases.append(tds[0].text.strip())
        total_deaths.append(tds[1].text.strip())

    for i in range(1, 99):
        tmp.append(country_names[i])
        tmp.append(total_cases[i])
        tmp.append(total_deaths[i])
        combined_cases.append(tmp)

fetch()
print(combined_cases)

#key for stock api PZAG1GIW98D2L9SX
#https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=PZAG1GIW98D2L9SX
import requests
from flask import Flask, jsonify, request
from flask_cors import CORS
import finnhub
import datetime
import calendar
finnhub_client = finnhub.Client(api_key="co50ivpr01qnik2v7320co50ivpr01qnik2v732g")
# Get the current year and month
current_year = datetime.date.today().year
current_month = datetime.date.today().month

# Construct the 'from' and 'to' date strings for the current month
from_date = f"{current_year}-{current_month:02d}-01"
to_date = f"{current_year}-{current_month:02d}-{calendar.monthrange(current_year, current_month)[1]}"

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/get_active_stocks")
def get_active_stocks():
    url = "https://data.alpaca.markets/v1beta1/screener/stocks/movers?top=10"
    headers = {
        'Content-Type': 'application/json',
        'Authorization' : 'Token e61d68bb4abd0f6a9450753b12fe54f541446ba4'
        }
    #r = requests.get("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=PZAG1GIW98D2L9SX")
    response = requests.get(url, headers=headers)
    #print(response.text)
    data = response.json()
    return jsonify(data)  # Convert the data to JSON format and return as response

@app.route("/get_news")
def get_news():
    #print(finnhub_client.general_news('general', min_id=0))
    return(finnhub_client.general_news('general', min_id=0))


@app.route("/get_earnings")
def get_earnings():
    #print(finnhub_client.earnings_calendar(_from="2024-05-10", to="2024-06-30", symbol="", international=False))
    return(finnhub_client.earnings_calendar(_from=from_date, to=to_date, symbol="", international=False))

@app.route("/get_market")
def get_market():
    return(finnhub_client.market_status(exchange='US'))

@app.route("/get_symbols")
def get_symbols():
    query = request.args.get('query')  # Extract the 'query' parameter from the URL
    print(query)
    if not query:
        return "Query parameter 'query' is missing", 400  # Return an error if 'query' parameter is missing

    symbols = finnhub_client.symbol_lookup(query)
    #print(symbols)
    filtered_result = [item for item in symbols['result'] if '.' not in item['symbol']]
    return jsonify(filtered_result)


if __name__ == "__main__":
    app.run(debug=True)
    
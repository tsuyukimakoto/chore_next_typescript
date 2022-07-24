import json
from datetime import datetime
import os

def lambda_handler(event, context):
    tz = os.environ['TZ']
    d = datetime.now()
    return {
        'statusCode': 200,
        'body': json.dumps(
            {
                'tz': tz,
                'datetime': f'{d.year}/{d.month:02d}/{d.day:02d} {d.hour:02d}:{d.minute:02d}:{d.second:02d}',
            }
        )
    }

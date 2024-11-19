import mariadb
import backend.dataCollection as dataCollection

def sendConnectionCommand(command, returnData):
    try:
        conn = mariadb.connect(
            user=dataCollection.user,
            password=dataCollection.password,
            host='127.0.0.1',
            port=3306,
            database=dataCollection.database
        )
    except mariadb.Error as e:
        print(f'Error connecting to mariadb: {e}')

    cur = conn.cursor()
    try:
        cur.execute(command)
    except mariadb.Error as e:
        print(f"Error: {e}")
    
    if returnData:
        list = cur.fetchall()
        conn.close()
        return list
    else:
        conn.close()
        return 'success'
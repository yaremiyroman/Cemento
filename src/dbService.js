const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

export const initDB = (data) => {
    const { columns, data: rows } = JSON.parse(data);
    console.log('initDB columns > ', columns);
    console.log('initDB rows > ', rows);

    return new Promise((resolve) => {
        const request = indexedDB.open('Cemento');

        request.onupgradeneeded = () => {
            const db = request.result;

            if (!db.objectStoreNames.contains('Columns')) {
                console.log('Creating Columns store');
                db.createObjectStore('Columns', { keyPath: 'id' });
            }

            if (!db.objectStoreNames.contains('Rows')) {
                console.log('Creating Rows store');
                db.createObjectStore('Rows', { keyPath: 'rowId', autoIncrement: true });
            }
        };

        request.onsuccess = () => {
            const db = request.result;
            const tx = db.transaction(['Rows', 'Columns'], 'readwrite');
            const storeRows = tx.objectStore('Rows');
            const storeColumns = tx.objectStore('Columns');

            for (let i in columns) {
                storeColumns.add(columns[i]);
            }

            for (let i in rows) {
                storeRows.add(rows[i]);
            }

            // resolve(rows);
        };

        request.onerror = () => {
            const error = request.error?.message
            if (error) {
                resolve(error);
            } else {
                resolve('Unknown error');
            }
        };
    });
};
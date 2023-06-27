const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

export const initDB = () => {
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
                db.createObjectStore('Rows', { keyPath: 'id' });
            }
        };

        request.onsuccess = () => {
            resolve(true);
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
}

export const putData = (data) => {
    const { columns, data: cells } = JSON.parse(data);
    // console.log('putData columns > ', columns);
    // console.log('putData cells > ', cells);

    const rows = [];

    cells.forEach((cell) => {
        const i = rows.findIndex(row => row.id === cell.id);

        if (i >= 0) {
            for (let key in cell) {
                if (key !== 'id') rows[i][key] = cell[key];
            }
        } else {
            rows.push(cell)
        }
    });

    return new Promise((resolve) => {
        const request = indexedDB.open('Cemento');

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

export const getData = (storeName) => {
    return new Promise((resolve) => {
        const request = indexedDB.open('Cemento');

        request.onsuccess = () => {
            const db = request.result;

            if (db.objectStoreNames.contains(storeName)) {
                const tx = db.transaction(storeName, 'readonly');
                const store = tx.objectStore(storeName);
                const res = store.getAll();

                res.onsuccess = () => {
                    resolve(res.result);
                };
            } else {
                resolve(false);
            }
        };
    });
};

export const updateData = (rowData) => {
    console.log('updateData > ', rowData);

    return new Promise((resolve) => {
        const request = indexedDB.open('Cemento');

        request.onsuccess = () => {
            const db = request.result;
            const tx = db.transaction('Rows', 'readwrite');
            const storeRows = tx.objectStore('Rows');
            storeRows.put(rowData);
            resolve(tx.complete);
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
}
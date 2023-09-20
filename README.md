# SQL Editor
An SQL Editor that easily allows users to select a table, choose corresponding query and view output. The editor is capable of handling large CSV files (tested with large file - stock_market table) and allows the user to upload a CSV file and display it's table as well. This project is built using React, TailwindCSS and few other packages which are mentioned below.
The data used is the data provided in the task description as well as an additional large CSV file all of which is deployed on a vercel server(as rawgithub URLS have issues with certain ISP's). Deployed Link: https://sql-editor-0512.vercel.app/

## Features
1. An easy to use UI where the user can firstly, choose the table from given options, and then he can choose suitable query from list of available queries. After this, the user can run the query and the output will be displayed on bottom panel.
2. User can view the structure or schema of the table with the type of data and constraints mentioned on top right panel.
3. User can also save queries to directly use them again, automatically choosing the relevant table for the query.
4. Paginated data allows the browser to render and display files having 1 Million + rows without breaking the browser.
5. Papa Parse, a popular npm library which claims to be the fastest CSV parser is used to parse CSV files. It has several options for service workers to offload main thread, as well as to stream data in the case of larger files.
6. User can select roles, which provides curated data or tables suited for that particular role.
7. User can add a CSV file from his own files and display it on the browser seamlessly without much delay.
8. The website is mobile responsive as well.

## Performance metrics
The website developed scored a perfect score on Lighthouse as displayed below.
![image](https://github.com/shreyas0512/SQL_Editor/assets/76905421/0d5fa853-cd7c-4889-8bd5-fe709a4b686d)
![image](https://github.com/shreyas0512/SQL_Editor/assets/76905421/daea5add-9745-4aa9-8584-65d0b84e9d51)


## Optimisations achieved
1. Pagination of Tables permit the website to display large tables without crashing the browser. This makes the user experience pleasant.
2. By using remote CSV links, I was able to reduce bundle size and improve website performance.
3. Effective usage of Context API, ensuring that only the components requiring the global state is wrapped within the context so as to prevent unnecessary re-renders.
4. Optimal utilisation of React hooks so as to prevent unnecessary side effects and re-renders. This helps to minimise delays and improve response time.
5. Usage of Papa Parse to decrease CSV parsing time and usage of in-built workers permitting main UI thread to remain unaffected.
6. Followed React development best practises to ensure reusability of components as well as abstraction of functions from component files.
7. No chunky npm packages used that could increase bundle size.
8. TailwindCSS keeps bundle size lower compared to larger css libraries, and allows for faster development.
9. Labels for screen readers and meta description added to improve accessibility and SEO respectively.
10. Mobile responsive UI.

## Dependencies
``` ab.json
   "react": "^18.2.0",
   "react-dom": "^18.2.0",
   "react-papaparse": "^4.1.0",
   "postcss": "^8.4.29",
   "tailwindcss": "^3.3.3",
   "vite": "^4.4.5"
```
## Demo
https://github.com/shreyas0512/SQL_Editor/assets/76905421/ecdebcc9-25d9-406b-9075-c18f0dfb98a4







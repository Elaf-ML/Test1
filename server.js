const http = require('http');
const fs = require('fs');
const url = require('url');
const getNavbar = require('./components/Navbar');
const getHomeContent = require('./routes/home');
const getAboutContent = require('./routes/about');
const getContactContent = require('./routes/contact');
const getServicesContent = require('./routes/services');
const getPortfolioContent = require('./routes/portfolio');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (pathname === '/') {
        res.end(getNavbar() + getHomeContent());
    } else if (pathname === '/about') {
        res.end(getNavbar() + getAboutContent());
    } else if (pathname === '/contact') {
        res.end(getNavbar() + getContactContent());
    } else if (pathname === '/services') {
        res.end(getNavbar() + getServicesContent());
    } else if (pathname === '/portfolio') {
        res.end(getNavbar() + getPortfolioContent());
    }  else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(getNavbar() + '<h1>404 Not Found</h1><p>The requested page could not be found.</p>');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
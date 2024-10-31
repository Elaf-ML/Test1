const getNavbar = () => {
    return `
        <nav style="background-color: #333; padding: 10px;">
            <a href="/" style="color: white; padding: 14px 20px; text-decoration: none;">Home</a>
            <a href="/about" style="color: white; padding: 14px 20px; text-decoration: none;">About</a>
            <a href="/contact" style="color: white; padding: 14px 20px; text-decoration: none;">Contact</a>
            <a href="/services" style="color: white; padding: 14px 20px; text-decoration: none;">Services</a>
            <a href="/portfolio" style="color: white; padding: 14px 20px; text-decoration: none;">Portfolio</a>
        </nav>
    `;
};

module.exports = getNavbar;
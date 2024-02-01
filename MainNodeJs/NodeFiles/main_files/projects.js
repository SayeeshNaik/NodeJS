
function googleSearching(searchString) {
    const axios = require('axios');
    const cheerio = require('cheerio');

    const searchQuery = searchString; // Replace with the user's search query
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`; // Replace with the search engine or website URL

    axios.get(searchUrl)
    .then(response => {
        const html = response.data;

        // Load the HTML into cheerio for parsing
        const $ = cheerio.load(html);

        // Select HTML tags and their links
        const links = [];

        exceptedTags =  [ 'Google','Images','Videos','Books','Maps','News','Shopping','Search tools',
                         'Past hour','Past 24 hours','Past week','Past month','Past year','Verbatim',
                         'Learn more','Sign in','Settings','Privacy','Terms','Dark theme: Off']
        $('a').each((index, element) => {
            const tag = $(element).text();
            var link = $(element).attr('href');
            link = link.slice(0,link.indexOf('&sa=U&ved=')).replace('/url?q=',"")

            if (tag && link && link.includes('https://') && !exceptedTags.includes(tag)) {
                links.push({ tag, link });
            }
        });

        // Process and use the links as needed
        console.log('Links from the search results:', links);

    })
    .catch(error => {
        console.error('Error fetching HTML:', error);
    });

}

module.exports = {
    googleSearching: googleSearching
}


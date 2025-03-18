document.getElementById('downloadBtn').addEventListener('click', function () {
    // Mock bookmarks data (replace this with actual bookmark data from APIs if available)
    const bookmarks = [
        { title: "Google", url: "https://www.google.com" },
        { title: "GitHub", url: "https://github.com" },
        { title: "Stack Overflow", url: "https://stackoverflow.com" },
    ];

    // Convert bookmarks to a text file content
    const fileContent = bookmarks.map(bookmark => `${bookmark.title}: ${bookmark.url}`).join('\n');

    // Create a Blob object
    const blob = new Blob([fileContent], { type: 'text/plain' });

    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'bookmarks.txt';
    link.click();

    // Clean up
    URL.revokeObjectURL(link.href);
});
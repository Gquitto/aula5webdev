function confirmRedirect(page) {
    let response = confirm("Confirm redirection to: " + page);

    if (response) {
        window.location.href = page;
    }
}
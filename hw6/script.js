document.getElementById('toggleBtn').addEventListener('click', function() {
    let sidebar = document.getElementById('sidebar');
    let content = document.getElementById('content');
    let toggleBtn = document.getElementById('toggleBtn');
    
    sidebar.classList.toggle('expanded');
    content.classList.toggle('expanded');
    toggleBtn.classList.toggle('expanded');
});

function toggleContainer(containerNumber) {
    
    const containers = document.querySelectorAll('.option');
    
    containers.forEach((container, index) => {
        
        if (index + 1 === containerNumber) {
            container.classList.add('active');
        } else {
            container.classList.remove('active');
        }
    });
}
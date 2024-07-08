function switchButton(option) {
    const withButton = document.getElementById('with-host'); //com
    const withoutButton = document.getElementById('without-host');// sem
    
    if (option === 'with') {
        withButton.classList.add('active');
        withoutButton.classList.remove('active');
        withButton.style.backgroundColor = '#718deb';
        withButton.style.color = 'white';
        withoutButton.style.backgroundColor = '#333';
        withoutButton.style.color = 'gray';
    } else {
        withoutButton.classList.add('active');
        withButton.classList.remove('active');
        withoutButton.style.backgroundColor = '#718deb';
        withoutButton.style.color = 'white';
        withButton.style.backgroundColor = '#333';
        withButton.style.color = 'gray';
    }
}

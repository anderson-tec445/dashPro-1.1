// URL da API do GitHub
const GITHUB_API_URL = 'https://api.github.com/users/anderson-tec445/repos';

// Elementos HTML
const projectList = document.getElementById('project-list');
const projectFrame = document.getElementById('project-frame');
const projectDescription = document.getElementById('project-description');

// Função para buscar projetos do GitHub
async function fetchProjects() {
    try {
        const response = await fetch(GITHUB_API_URL);
        const projects = await response.json();
        displayProjects(projects);
    } catch (error) {
        console.error('Erro ao buscar projetos:', error);
    }
}

// Função para exibir os projetos na sidebar
function displayProjects(projects) {
    projects.forEach(project => {
        // Cria um item de lista para cada projeto
        const listItem = document.createElement('li');
        listItem.textContent = project.name;

        // Adiciona evento de clique para carregar o projeto
        listItem.addEventListener('click', () => displayProjectDetails(project));
        projectList.appendChild(listItem);
    });
}

// Função para exibir o projeto no iframe
function displayProjectDetails(project) {
    console.log('Projeto selecionado:', project); // Verifique o projeto no console

    const homepage = project.homepage; // URL do projeto (GitHub Pages)
    if (homepage) {
        projectFrame.src = homepage; // Carrega o projeto no iframe
        projectDescription.textContent = project.description || 'Sem descrição disponível.';
    } else {
        projectFrame.src = ''; // Limpa o iframe
        projectDescription.textContent = 'Este projeto não possui uma página pública configurada.';
    }
}


// Carregar projetos ao iniciar
fetchProjects();

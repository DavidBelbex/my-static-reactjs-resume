export type Lang = 'en' | 'es' | 'fr';
export type TabKey = 'profile' | 'experience' | 'education' | 'languages' | 'training' | 'skills' | 'projects' 

export const labels: Record<Lang, Record<TabKey, string>> = {
  en: { profile: 'Profile', experience: 'Experience', education: 'Education', languages: 'Idiomas', training:'Certifications and courses',  skills: 'Skills', projects: 'Projects'},
  es: { profile: 'Perfil', experience: 'Experiencia', education: 'Educación', languages: 'Languages', training:'Cursos y Certificados', skills: 'Habilidades', projects: 'Proyectos'},
  fr: { profile: 'Profil', experience: 'Expérience', education: 'Éducation', languages: 'Langages', training:'Cursos y Certificados', skills: 'Compétences', projects: 'Projets' }  
}

export const content: Record<TabKey, Record<Lang, string>> = {
  profile: {
    en: 'Short professional summary...',
    es: `<p style="margin-bottom: 1em;">Líder técnico con más de 7 años de experiencia en <b>diseño, implementación y despliegue de soluciones cloud</b> (AWS sobre todo serverless), automatización de procesos, monitorización y arquitectura escalable. Experiencia en asesoramiento a equipos y homogeneización de plataformas cloud, garantizando eficiencia, buenas prácticas y calidad en el ciclo completo de desarrollo.Arquitecto de software con un enfoque estratégico en la definición de arquitecturas sólidas, escalables y resilientes, siempre alineadas con las necesidades del negocio. Me caracterizo por una alta capacidad resolutiva, aportando soluciones prácticas y eficientes en entornos complejos y cambiantes.</p>
        <p style="margin-bottom: 1em;">Acostumbrado a liderar equipos multidisciplinares, promuevo la innovación tecnológica, la mejora continua y la optimización de recursos, asegurando entregas de alto impacto y sostenibilidad a largo plazo.</p>
        <p style="margin-bottom: 1em;">Me considero un profesional accesible y colaborativo, siempre dispuesto a ofrecer orientación y asesoramiento para abordar los desafíos de manera eficaz.</p>`,
    fr: 'Bref résumé...',    
  },
  experience: {
    en: 'Work experience...',
    es: 'Experiencia laboral...',
    fr: 'Expérience...'
  },
  education: {
    en: 'Education background...',
    es: 'Formación...',
    fr: 'Études...'    
  },
  languages: {
    en: 'Skills...',
    es: 'Habilidades...',
    fr: 'Compétences...'    
  },
  skills: {
    en: 'Skills...',
    es: 'Habilidades...',
    fr: 'Compétences...'    
  },
  projects: {
    en: 'Projects...',
    es: 'Proyectos...',
    fr: 'Projets...',    
  },
  training: {
    en: 'Certificaciones...',
    es: 'Certificaciones...',
    fr: 'Certificaciones...'    
  }
}
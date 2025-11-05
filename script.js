// Get form elements
const form = document.getElementById('profileForm');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const preview = document.getElementById('preview');
const borderRadiusInput = document.getElementById('borderRadius');
const borderRadiusValue = document.getElementById('borderRadiusValue');

// Update border radius display
borderRadiusInput.addEventListener('input', (e) => {
    borderRadiusValue.textContent = `${e.target.value}px`;
});

// Auto-generate preview on input change
const formInputs = form.querySelectorAll('input, select');
formInputs.forEach(input => {
    input.addEventListener('input', generatePreview);
    input.addEventListener('change', generatePreview);
});

// Generate preview button
generateBtn.addEventListener('click', generatePreview);

// Download button
downloadBtn.addEventListener('click', downloadHTML);

// Get form data
function getFormData() {
    return {
        name: document.getElementById('name').value || 'Your Name',
        intro: document.getElementById('intro').value || 'Your introduction goes here',
        email: document.getElementById('email').value || 'email@example.com',
        imageUrl: document.getElementById('imageUrl').value || 'https://via.placeholder.com/200',
        twitter: document.getElementById('twitter').value,
        github: document.getElementById('github').value,
        template: document.querySelector('input[name="template"]:checked').value,
        enableProfilePic: document.getElementById('enableProfilePic').checked,
        displaySocialLinks: document.getElementById('displaySocialLinks').checked,
        primaryColor: document.getElementById('primaryColor').value,
        secondaryColor: document.getElementById('secondaryColor').value,
        backgroundColor: document.getElementById('backgroundColor').value,
        textColor: document.getElementById('textColor').value,
        fontFamily: document.getElementById('fontFamily').value,
        borderRadius: document.getElementById('borderRadius').value
    };
}

// Generate Template A (Centered Layout)
function generateTemplateA(data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - Profile</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: ${data.fontFamily};
            background: linear-gradient(135deg, ${data.primaryColor} 0%, ${data.secondaryColor} 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: ${data.textColor};
        }
        
        .container {
            text-align: center;
            max-width: 600px;
            width: 100%;
        }
        
        ${data.enableProfilePic ? `
        .profile-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid rgba(255, 255, 255, 0.3);
            margin-bottom: 30px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
        ` : ''}
        
        h1 {
            font-size: 3rem;
            color: white;
            margin-bottom: 15px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .intro {
            font-size: 1.3rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 30px;
            line-height: 1.6;
        }
        
        ${data.displaySocialLinks ? `
        .social-links {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 30px;
        }
        
        .social-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            text-decoration: none;
            border-radius: ${data.borderRadius}px;
            font-weight: 500;
            transition: all 0.3s;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .social-btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        ` : ''}
        
        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }
            
            .intro {
                font-size: 1.1rem;
            }
            
            ${data.enableProfilePic ? `
            .profile-image {
                width: 150px;
                height: 150px;
            }
            ` : ''}
        }
    </style>
</head>
<body>
    <div class="container">
        ${data.enableProfilePic ? `<img src="${data.imageUrl}" alt="${data.name}" class="profile-image">` : ''}
        
        <h1>${data.name}</h1>
        <p class="intro">${data.intro}</p>
        
        ${data.displaySocialLinks ? `
        <div class="social-links">
            <a href="mailto:${data.email}" class="social-btn">
                📧 Email
            </a>
            ${data.twitter ? `
            <a href="https://twitter.com/${data.twitter}" target="_blank" class="social-btn">
                🐦 Twitter
            </a>
            ` : ''}
            ${data.github ? `
            <a href="https://github.com/${data.github}" target="_blank" class="social-btn">
                💻 GitHub
            </a>
            ` : ''}
        </div>
        ` : ''}
    </div>
</body>
</html>`;
}

// Generate Template B (Card Layout)
function generateTemplateB(data) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - Profile</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: ${data.fontFamily};
            background-color: ${data.backgroundColor};
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .card {
            background: white;
            border-radius: ${data.borderRadius}px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
            max-width: 900px;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            overflow: hidden;
        }
        
        .left-section {
            padding: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .right-section {
            background: linear-gradient(135deg, ${data.primaryColor} 0%, ${data.secondaryColor} 100%);
            padding: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        ${data.enableProfilePic ? `
        .profile-image {
            width: 100%;
            max-width: 300px;
            height: auto;
            border-radius: ${data.borderRadius}px;
            object-fit: cover;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }
        ` : ''}
        
        h1 {
            font-size: 2.5rem;
            color: ${data.textColor};
            margin-bottom: 15px;
        }
        
        .intro {
            font-size: 1.1rem;
            color: #6b7280;
            margin-bottom: 30px;
            line-height: 1.6;
        }
        
        .email-btn {
            display: inline-block;
            padding: 14px 28px;
            background: linear-gradient(135deg, ${data.primaryColor} 0%, ${data.secondaryColor} 100%);
            color: white;
            text-decoration: none;
            border-radius: ${data.borderRadius}px;
            font-weight: 600;
            transition: all 0.3s;
            margin-bottom: 20px;
        }
        
        .email-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        ${data.displaySocialLinks ? `
        .social-icons {
            display: flex;
            gap: 15px;
            margin-top: 10px;
        }
        
        .social-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${data.backgroundColor};
            border-radius: 50%;
            text-decoration: none;
            font-size: 1.2rem;
            transition: all 0.3s;
        }
        
        .social-icon:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        ` : ''}
        
        @media (max-width: 768px) {
            .card {
                grid-template-columns: 1fr;
            }
            
            .left-section,
            .right-section {
                padding: 30px;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            .intro {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="left-section">
            <h1>${data.name}</h1>
            <p class="intro">${data.intro}</p>
            
            <a href="mailto:${data.email}" class="email-btn">📧 Get in Touch</a>
            
            ${data.displaySocialLinks ? `
            <div class="social-icons">
                ${data.twitter ? `
                <a href="https://twitter.com/${data.twitter}" target="_blank" class="social-icon" title="Twitter">
                    🐦
                </a>
                ` : ''}
                ${data.github ? `
                <a href="https://github.com/${data.github}" target="_blank" class="social-icon" title="GitHub">
                    💻
                </a>
                ` : ''}
            </div>
            ` : ''}
        </div>
        
        ${data.enableProfilePic ? `
        <div class="right-section">
            <img src="${data.imageUrl}" alt="${data.name}" class="profile-image">
        </div>
        ` : ''}
    </div>
</body>
</html>`;
}

// Generate preview
function generatePreview() {
    const data = getFormData();
    const html = data.template === 'A' ? generateTemplateA(data) : generateTemplateB(data);
    
    // Create iframe for preview
    preview.innerHTML = `<iframe style="width: 100%; height: 600px; border: none; border-radius: 8px;"></iframe>`;
    const iframe = preview.querySelector('iframe');
    iframe.contentDocument.open();
    iframe.contentDocument.write(html);
    iframe.contentDocument.close();
}

// Download HTML
function downloadHTML() {
    const data = getFormData();
    const html = data.template === 'A' ? generateTemplateA(data) : generateTemplateB(data);
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.name.replace(/\s+/g, '-').toLowerCase()}-profile.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Initial preview generation
generatePreview();
# Guía Paso a Paso: Cómo Subir tu Portafolio a GitHub y Publicarlo Gratis

¡Tu portafolio está listo y optimizado! Para publicarlo en internet de forma gratuita usando **GitHub Pages**, sigue esta guía. 

---

## Método 1: Usando la aplicación visual **GitHub Desktop** (Recomendado y más fácil)

### Paso 1: Descargar e Instalar GitHub Desktop
Si no lo tienes, descarga e instala **GitHub Desktop** desde [desktop.github.com](https://desktop.github.io/). Inicia sesión con tu cuenta de GitHub.

### Paso 2: Crear el Repositorio Local
1. Abre **GitHub Desktop**.
2. Ve al menú superior: `File` -> `Add local repository...`.
3. Haz clic en `Choose...` y selecciona la carpeta de tu proyecto:
   `C:\Users\msand\.gemini\antigravity\scratch\portfolio`
4. La aplicación te dirá que esa carpeta no es un repositorio Git y te ofrecerá crearlo. Haz clic en el enlace **"create a repository"**.
5. Rellena los datos en la ventana flotante:
   - **Name**: `portfolio` (o el nombre que prefieras).
   - Deja el resto de opciones por defecto y haz clic en **Create Repository**.

### Paso 3: Confirmar los Archivos (Commit)
1. En la barra lateral izquierda verás todos los archivos (`index.html`, `script.js`, `style.css` y las imágenes).
2. En la parte inferior izquierda, en el cuadro "Summary", escribe un título para tu subida, por ejemplo: `Subida inicial del portafolio`.
3. Haz clic en el botón azul **"Commit to main"**.

### Paso 4: Publicar en GitHub
1. Haz clic en el botón **"Publish repository"** en la barra superior.
2. En la ventana que aparece:
   - Asegúrate de que el nombre sea el correcto.
   - **IMPORTANTE**: Desmarca la casilla **"Keep this code private"** (si lo dejas privado, no podrás activar la web gratuita).
3. Haz clic en **Publish Repository**. ¡Tus archivos ya están en internet!

---

## Método 2: Usando la consola de comandos (Git CLI)

Si prefieres usar la terminal (PowerShell o Git Bash), abre la consola en la carpeta del portafolio y ejecuta:

```bash
# 1. Inicializar el repositorio
git init -b main

# 2. Agregar todos los archivos
git add .

# 3. Confirmar los archivos
git commit -m "Subida inicial del portafolio"

# 4. Crear el repositorio vacío en github.com y copiar la URL HTTPS. Luego asócialo:
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 5. Subir los archivos
git push -u origin main
```

---

## Cómo Activar tu Web Gratis (GitHub Pages)

Una vez que hayas subido el código usando cualquiera de los dos métodos anteriores:

1. Entra a tu cuenta en [github.com](https://github.com/) y abre tu repositorio (`portfolio`).
2. Ve a la pestaña **Settings** (Configuración) en el menú superior del repositorio (el icono de engranaje).
3. En la barra lateral izquierda, busca la sección **Code and automation** y haz clic en **Pages**.
4. En el apartado **Build and deployment**:
   - En **Source**, asegúrate de que esté seleccionado **Deploy from a branch**.
   - En **Branch**, cambia `None` por **`main`** (o `master`).
   - Deja la carpeta en **`/ (root)`** y haz clic en **Save** (Guardar).
5. Espera de 1 a 2 minutos. Recarga la página de configuración y verás un recuadro verde arriba con tu enlace público, que lucirá similar a esto:
   `https://tu-usuario.github.io/portfolio/`

---

## Validar el Formulario de Contacto

- **¡El formulario ya está completamente listo!** Configuré tu clave de acceso personalizada de Web3Forms (`1240f932-3280-47c2-a092-2d8526282648`).
- Cuando la web esté publicada y alguien te envíe un mensaje a través del formulario, los datos se enviarán directamente a tu correo electrónico: **m.sandoval.q0123@gmail.com**.
- No necesitas configurar nada más, ya funciona de forma automática tanto en tu computadora local como en GitHub Pages.

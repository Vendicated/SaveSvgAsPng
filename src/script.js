const url = new URL(window.location.href).searchParams.get('url');

const img = new Image();
img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const link = document.createElement('a');
    link.download = "image.png";
    link.href = canvas.toDataURL();
    link.click();

    setTimeout(() => window.close(), 100)
};

img.crossOrigin = "anonymous";
img.src = url;
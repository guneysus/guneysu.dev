window.addEventListener("DOMContentLoaded", function () {
    var avatar = document.querySelector("img.avatar");
    var profileCard = document.querySelector(".profile-card");

    var rendererWidth = avatar.width * 2;
    var rendererHeight = avatar.width * 2;

    var cameraAspectRatio = rendererWidth / rendererHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, cameraAspectRatio, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0); // tranparent

    // renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setSize(rendererWidth, rendererHeight);

    renderer.domElement.classList.add(
        "fl",
        "absolute--fill",
        "absolute",
        "h-100",
        "pa0",
        "ma0",
        "o-50",
        "z-0",
        "renderer",
        "animate__animated",
        "animate__fast",
        "animate__delay-1s",
        "animate__zoomIn"
    );

    debugger;

    // renderer.domElement.setAttribute("id", "rotating-cube");

    // document.body.appendChild(renderer.domElement);
    profileCard.prepend(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0xc0c0c0 })
    );
    scene.add(line);

    const material = new THREE.MeshBasicMaterial({ color: 0x77b57d });
    const cube = new THREE.Mesh(geometry, material);
    // scene.add( cube );

    camera.position.z = 2.85;

    const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        line.rotation.x += 0.01;
        line.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    animate();

    function onWindowResize() {
        // camera.aspect = window.innerWidth / (window.innerHeight / 3);
        // camera.position = 2.5;
        // camera.updateProjectionMatrix();
        // renderer.setSize(window.innerWidth, window.innerHeight / 3);
    }

    window.addEventListener("resize", onWindowResize);
});


  // HABITAT -----------------------------------------------------------------------

  var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    SCREEN_WIDTH_HALF = SCREEN_WIDTH / 2,
    SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

  var camera, scene, renderer, stats;
  var butterfly, butterflies, boid, boids;

  init();
  animate();

  function init() {

    camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
    camera.position.z = 300;
    scene = new THREE.Scene();

    //光源
    var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.5);
    light.position.set(0.5, 1, 0.75);
    scene.add(light);

    var light = new THREE.DirectionalLight(0xefefff, 0.7);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);
    var light = new THREE.DirectionalLight(0xffefef, 1);
    light.position.set(-1, -1, -1).normalize();
    scene.add(light);

    butterflies = [];
    boids = [];

    const skinMap = new THREE.TextureLoader().load('./phps/userPattern/plan-pattern-test.jpg');
    skinMap.wrapS = skinMap.wrapT = THREE.RepeatWrapping;
    var mat = new THREE.MeshBasicMaterial({//MeshBasicMaterial//MeshPhongMaterial
      // transparent: true, 
      // opacity: 0.5, 
      // reflectivity: 0.2,
      refractionRatio:0.3,
      wireframe:false,
      color: 0xffffff,
      // shading: THREE.FlatShading, color: Math.random()*0xffffff, 
      side: THREE.DoubleSide,
      map: skinMap,
    });
    
    for (var i = 0; i < 50; i++) {
      boid = boids[i] = new Boid();
      boid.position.x = Math.random() * 400 - 200;
      boid.position.y = Math.random() * 400 - 200;
      boid.position.z = Math.random() * 400 - 200;
      boid.velocity.x = Math.random() * 100 - 10; //2-1
      boid.velocity.y = Math.random() * 200 - 10; //2-1
      boid.velocity.z = Math.random() * 10 - 10; //2-1
      boid.setAvoidWalls(true);
      boid.setWorldSize(500, 500, 400);
      // var alpha = THREE.ImageUtils.loadTexture('mask'+Math.floor(Math.random()*4)+'.jpg');
      butterfly = butterflies[i] = new THREE.Mesh(new Butterfly(), mat);
      butterfly.geometry.scale(2, 2, 2); //改飛機大小
      // butterfly.phase = Math.floor( Math.random() * 62.83 );
      // butterfly.original = {r:butterfly.material.color.r,g:butterfly.material.color.g,b:butterfly.material.color.b}
      scene.add(butterfly);
    }

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha:true,
    });
    // renderer.setClearColor(0xC4D7F2, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    renderer.autoClear = true;


    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.getElementById('planeContainer').appendChild(renderer.domElement);


    // stats = new Stats();
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.display = 'inline-block';
    // stats.domElement.style.left = '0px';
    // stats.domElement.style.top = '0px';
    // document.getElementById('statsBox').appendChild(stats.domElement);

    //

    window.addEventListener('resize', onWindowResize, false);

  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // -----------------------------------------------
  function onDocumentMouseMove(event) {
    var vector = new THREE.Vector3(event.clientX - SCREEN_WIDTH_HALF, -event.clientY + SCREEN_HEIGHT_HALF, 0);
    for (var i = 0, il = boids.length; i < il; i++) {
      boid = boids[i];
      vector.z = boid.position.z;
      boid.repulse(vector);
    }
  }
  // -----------------------------------------------

  function animate() {
    requestAnimationFrame(animate);
    render();
    // stats.update();
  }
  // setInterval(animate,1000/30);
  // animate();

  function render() {

    for (var i = 0, il = butterflies.length; i < il; i++) {

      boid = boids[i];
      boid.run(boids);

      butterfly = butterflies[i];
      butterfly.position.copy(boids[i].position);

      // butterfly.geometry.verticesNeedUpdate = true;

      // o = butterfly.original; // custom object to keep track of original color
      // color = butterfly.material.color;
      // var shift = (400-butterfly.position.z)/1000;
      // color.r = (1-o.r) * shift + o.r; 
      // color.g = (1-o.g) * shift + o.g;
      // color.b = (1-o.b) * shift + o.b;

      butterfly.rotation.y = Math.atan2(-boid.velocity.z, boid.velocity.x);
      butterfly.rotation.z = Math.asin(boid.velocity.y / boid.velocity.length());

      // butterfly.phase = ( butterfly.phase + ( Math.max( 0, butterfly.rotation.z ) + 0.3 )  ) % 62.83;

      // butterfly.geometry.vertices[ 1 ].y = butterfly.geometry.vertices[ 1 ].y = 6 * Math.cos( butterfly.phase );
      // butterfly.geometry.vertices[ 1 ].y = butterfly.geometry.vertices[ 1 ].y = 6 * Math.sin( butterfly.phase );
      // butterfly.geometry.vertices[ 1 ].z = butterfly.geometry.vertices[ 1 ].z = 6 * Math.sin( butterfly.phase );	
      // butterfly.geometry.vertices[ 1 ].z = butterfly.geometry.vertices[ 1 ].z = 6 * Math.cos( butterfly.phase );

    }

    renderer.render(scene, camera);


  }
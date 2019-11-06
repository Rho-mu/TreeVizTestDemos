var canvasport = document.getElementById("canvasport");

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xadd8e6 );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10 );

var renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setSize( window.innerWidth, window.innerHeight );
canvasport.appendChild( renderer.domElement );

var crownGeo = new THREE.ConeGeometry( 2, 2, 10 );
var crownMat = new THREE.MeshBasicMaterial( {color: 0x00FF00} );
var crown = new THREE.Mesh( crownGeo, crownMat );
crown.position.y = 2;
scene.add( crown );

var trunkGeo = new THREE.CylinderGeometry( 1, 1, 3, 10 );
var trunkMat = new THREE.MeshBasicMaterial( {color: 0xb5651d} );
var trunk = new THREE.Mesh( trunkGeo, trunkMat );
scene.add( trunk );

camera.position.z = 6;

function update()
{
  crown.rotation.y += 0.01;
  trunk.rotation.y += 0.01;
}

function animate()
{
	requestAnimationFrame( animate );
  update();
	renderer.render( scene, camera );
}
animate();

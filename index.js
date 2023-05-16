// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

// const loader = new GLTFLoader();

// loader.load(
// 	// resource URL
// 	'3dModels/gaming_desktop_pc/scene.gltf',
// 	// called when the resource is loaded
// 	function ( gltf ) {

// 		scene.add( gltf.scene );

// 		gltf.animations; // Array<THREE.AnimationClip>
// 		gltf.scene; // THREE.Group
// 		gltf.scenes; // Array<THREE.Group>
// 		gltf.cameras; // Array<THREE.Camera>
// 		gltf.asset; // Object

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );

//Creating a scene
const scene = new THREE.Scene();


const geometry = new THREE.BoxGeometry( 3, 64, 64 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);
// scene.add(light);

const camera = new THREE.PerspectiveCamera( 75, 800 / 600);
scene.add(camera);
camera.position.z = 5;


const canvas = document.querySelector(".computer")
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize( 800, 600 );
renderer.render(scene, camera);


// function animate() {
//     requestAnimationFrame( animate );
// 	renderer.render(scene, camera );
// }
// animate();

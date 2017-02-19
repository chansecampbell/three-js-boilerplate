import * as THREE from 'three';
import TWEEN from 'tween.js';
import Cube from './cube.js';

// var scene;
// var camera;
// var renderer;
// const cube = new Cube(5, 5, 5);


class Scene {
	constructor() {
		this.scene = new THREE.Scene();
		this.createRenderer();
		this.createCamera();
		this.createLight();
		this.createObjects();
	}

	createRenderer() {
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(0x000000, 1.0);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.shadowMap.enabled = true;
		document.body.appendChild(this.renderer.domElement);
	}

	createCamera() {
		this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.camera.position.x = 5;
		this.camera.position.y = 10;
		this.camera.position.z = 23;
		this.camera.lookAt(this.scene.position);
	}

	createLight() {
		this.spotLight = new THREE.SpotLight(0xffffff);
		this.spotLight.position.set(10, 40, 20);
		this.spotLight.shadow.camera.near = 20;
		this.spotLight.shadow.camera.far = 50;
		this.spotLight.castShadow = true;
		this.scene.add(this.spotLight);
		// function createLight() {
// 	var spotLight = new THREE.SpotLight(0xffffff);
// 	spotLight.position.set(10, 40, 20);
// 	spotLight.shadow.camera.near = 20;
// 	spotLight.shadow.camera.far = 50;
// 	spotLight.castShadow = true;
// 	scene.add(spotLight);
// }
	}

	createObjects() {
		this.cube = new Cube(5, 5, 5);
		this.scene.add(this.cube.getMesh());
	}

	render() {
		this.renderer.render(this.scene, this.camera);
		this.requestAnimationFrame(this.render);
	}
}

new Scene;

// function createRenderer() {
// 	renderer = new THREE.WebGLRenderer();
// 	renderer.setClearColor(0x000000, 1.0);
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// 	renderer.shadowMap.enabled = true;
// }

// function createCamera() {
// 	camera = new THREE.PerspectiveCamera(
// 		100,
// 		window.innerWidth / window.innerHeight,
// 		0.1, 1000);
// 	camera.position.x = 5
// 	camera.position.y = 10;
// 	camera.position.z = 23;
// 	camera.lookAt(scene.position);
// }

// function createLight() {
// 	var spotLight = new THREE.SpotLight(0xffffff);
// 	spotLight.position.set(10, 40, 20);
// 	spotLight.shadow.camera.near = 20;
// 	spotLight.shadow.camera.far = 50;
// 	spotLight.castShadow = true;
// 	scene.add(spotLight);
// }

// function createCube() {
// 	cube = new THREE.Mesh( new THREE.CubeGeometry(5, 5, 5), new THREE.MeshNormalMaterial() );
// 	cube.position.y = 5;
// 	cube.position.z = 10;
// 	cube.name = 'cube';
// 	scene.add( cube );
// }

// function init() {
// 	scene = new THREE.Scene();

// 	createRenderer();
// 	createCamera();
// 	createLight();
// 	// createCube();
// 	scene.add(cube.getMesh());
	
// 	document.body.appendChild(renderer.domElement);

// 	render();
// }

// function render() {

// 	renderer.render(scene, camera);
// 	requestAnimationFrame(render);
// }

// init();





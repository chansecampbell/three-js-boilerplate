const hello = "Message";

import * as THREE from 'three';
import TWEEN from 'tween.js';

var scene;
var camera;
var renderer;
var cube;

function createRenderer() {
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0x000000, 1.0);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
}

function createCamera() {
	camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth / window.innerHeight,
		0.1, 1000);
	camera.position.x = 15;
	camera.position.y = 16;
	camera.position.z = 23;
	camera.lookAt(scene.position);
}

function createLight() {
	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(10, 40, 20);
	spotLight.shadow.camera.near = 20;
	spotLight.shadow.camera.far = 50;
	spotLight.castShadow = true;
	scene.add(spotLight);
}

function createCube() {
	cube = new THREE.Mesh( new THREE.CubeGeometry(10, 10, 10), new THREE.MeshNormalMaterial() );
	cube.position.y = 5;
	cube.position.z = 10;
	cube.name = 'cube';
	scene.add( cube );
}

function init() {
	scene = new THREE.Scene();

	createRenderer();
	createCamera();
	createLight();
	createCube();
	
	document.body.appendChild(renderer.domElement);

	render();
}

function render() {

	renderer.render(scene, camera);
	requestAnimationFrame(render);
}

init();





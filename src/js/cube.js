import * as THREE from 'three';

class Cube {

    constructor(width, height, depth) {
        this.geometry = new THREE.CubeGeometry(width, height, depth);
        this.material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.x = 0;
        this.mesh.position.y = 5;
        this.mesh.position.z = 10;
    }

    get() {
        return this.mesh;
    }

    update() {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    }

    addName(name) {
        this.mesh.name = name;
    } 
}

export default Cube;
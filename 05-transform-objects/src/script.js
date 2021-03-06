import './style.css'
import * as THREE from 'three'

console.log('Hello Three.js')

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
//  const geometry = new THREE.BoxGeometry(1, 1, 1)
//  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
//  const mesh = new THREE.Mesh(geometry, material)
//  scene.add(mesh) 
const group = new THREE.Group()
group.position.y = 1
group.position.x = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'teal'})
)
cube1.position.x = -2
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'tomato'})
)
group.add(cube2)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'palegreen'})
)
cube3.position.x = +2
group.add(cube3)

//Position
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

//mesh.position.set(0.7, -0.6, 1)

// Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5

//mesh.scale.set(2, 0.5, 0.5)

// Rotation (Full rotation is 2*Math.PI)
// Be careful, might get gimbal lock, use reorder() 
//mesh.rotation.reorder('XYZ')
//mesh.rotation.y = Math.PI * 0.25
//mesh.rotation.x = Math.PI * 0.25

// Axes helper
const axesHelper = new THREE.AxesHelper(3) //red - x, blue - z, green - y
scene.add(axesHelper)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 6

scene.add(camera)

// camera.lookAt(new THREE.Vector3(3, 0, 0))
camera.lookAt(group.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
import './style.css'
import * as THREE from 'three'
import gsap from 'gsap' //must install: npm install --save gsap@3.5.1

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "teal" })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)

// // Time
// let time = Date.now()

// Clock
const clock = new THREE.Clock()

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

// Animations
const tick = () => 
{
    // // Clock 
    // const elapsedTime = clock.getElapsedTime()

    // // Time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime

    //mesh.rotation.y = Math.sin(elapsedTime)

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
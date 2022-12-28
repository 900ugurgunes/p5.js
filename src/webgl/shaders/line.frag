precision mediump float;
precision mediump int;

varying vec4 vColor;

void main() {
  gl_FragColor = vec4(vColor.rgb, 1.) * vColor.a;
}

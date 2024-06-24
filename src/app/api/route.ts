export async function GET() {
  return Response.json({
    files: [
      {
        name: "Xbot.glb",
        type: "animation/gltf",
        baseActions: {
          idle: { weight: 1 },
          walk: { weight: 0 },
          run: { weight: 0 },
        },
      },
    ],
  });
}

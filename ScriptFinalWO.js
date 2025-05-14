Notification.requestPermission();
const filter = "Asignado";
let idInterval = null;

// 🎵 Función para reproducir sonido (nuevo enlace)
function playSound() {
    const audio = new Audio("https://raw.githubusercontent.com/Jwin1/audio_notificacion/main/notification-6175.mp3");
    audio.play().catch(e => console.warn("🔇 Error al reproducir sonido:", e));
}

function check() {
    let found = false;

    const spans = $("div.BaseTableInner .BaseTable nobr.dp span");

    for (let i = 0; i < spans.length; i++) {
        const val = spans[i].innerHTML.trim();
        if (val === filter) {
            found = true;
            console.log("🔔 ¡Notificación encontrada! Estado: Asignado.");

            playSound();

            const woRow = $(spans[i]).closest("tr");

            if (woRow.length) {
                console.log("📄 Fila de la WO encontrada. Simulando doble clic...");

                const dblClickEvent = new MouseEvent("dblclick", {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                woRow[0].dispatchEvent(dblClickEvent);

                console.log("🖱️ Doble clic simulado. Esperando para que cargue la vista de detalle...");

                setTimeout(() => {
                    const woInput = document.querySelector('#arid_WIN_4_1000000182');
                    const descInput = document.querySelector('#arid_WIN_4_1000000151');
                    const estadoInput = document.querySelector('#arid_WIN_4_7');

                    if (!woInput || !descInput || !estadoInput) {
                        console.log("❌ No se pudo acceder a uno de los campos necesarios.");
                        return;
                    }

                    const estadoActual = estadoInput.title.trim();
                    console.log(`📋 Estado actual de la WO: ${estadoActual}`);

                    if (estadoActual === "Asignado") {
                        const botonEstado = estadoInput.nextElementSibling;

                        if (botonEstado) {
                            console.log("🔁 Intentando cambiar estado a 'En curso'...");
                            botonEstado.click();

                            const esperarMenu = setInterval(() => {
                                const menu = document.querySelector('.MenuOuter');
                                if (menu && menu.style.visibility !== 'hidden') {
                                    const opciones = [...menu.querySelectorAll('td')];

                                    // 🛡️ Imprimir todas las opciones disponibles en el menú
                                    opciones.forEach(td => {
                                        console.log(`📦 Opción encontrada en menú: [${td.innerText.trim()}]`);
                                    });

                                    const opcionEnCurso = opciones.find(td => td.innerText.trim() === "En curso");

                                    if (opcionEnCurso) {
                                        opcionEnCurso.click();
                                        console.log(`✅ WO ${woInput.value.trim()} actualizada a 'En curso'.`);
                                        console.log(`📝 Descripción: ${descInput.value.trim()}`);

                                        const botonGuardar = document.querySelector('a[arid="300000300"]');
                                        if (botonGuardar) {
                                            botonGuardar.click();
                                            console.log("💾 Cambios guardados.");
                                        } else {
                                            console.log("❌ Botón de guardar no encontrado.");
                                        }
                                    } else {
                                        console.log("⚠️ No se encontró la opción 'En curso' en el menú.");
                                    }

                                    clearInterval(esperarMenu);
                                }
                            }, 300);
                        } else {
                            console.log("❌ No se encontró el botón para desplegar estados.");
                        }
                    } else {
                        console.log("⏩ El estado no es 'Asignado', no se realiza cambio.");
                    }
                }, 4000);

                break;
            } else {
                console.log("❌ No se encontró la fila de la WO.");
            }
        }
    }

    if (!found) {
        console.log("🟢 Sin notificaciones, todo libre.");
    } else {
        console.log("🔄 ¡Hay notificaciones! Se procesó una orden.");
    }
}

// Intervalo de monitoreo cada minuto
idInterval = setInterval(() => {
    console.log("⏳ Ejecutando comprobación cada minuto...");
    $("div.TableHdr > table > tbody > tr > td.TableHdrR > a.Ref.btn.btn3d.TableBtn").each((_, item) => {
        item.click();
    });
    check();
}, 20000);

function stopInterval() {
    clearInterval(idInterval);
    console.log("🔴 Monitoreo detenido.");
}

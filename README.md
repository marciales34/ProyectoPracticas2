# 🚀 Automatización y Gestión de Órdenes BMC Remedy + Integración con Kanboard

![BMC Remedy + Kanboard](https://img.shields.io/badge/Estado-En%20desarrollo%20%F0%9F%9A%A7-yellow)  
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js) ![Script](https://img.shields.io/badge/Automatización-Scripts-blue) ![Kanboard](https://img.shields.io/badge/Kanboard-Integración-purple)

## 🧠 Descripción general

Este proyecto tiene como objetivo principal **automatizar el manejo de órdenes de trabajo (WO)** en la plataforma **BMC Remedy**, optimizando el tiempo de respuesta del equipo y facilitando la trazabilidad de cada acción. Además, busca **integrar estas tareas de forma estructurada en el gestor de proyectos Kanboard**, permitiendo una visualización más clara y colaborativa de las órdenes tratadas.

## 📌 ¿Qué hace este proyecto?

🔹 **Automatización en BMC Remedy** mediante un script en JavaScript que:

- Monitorea continuamente la bandeja de entrada de órdenes (estado *Asignado*).
- Extrae automáticamente el número de orden y su solicitud.
- Cambia el estado de cada orden a **“En curso”** si es válida.
- Simula clics para confirmar los cambios y emite alertas sonoras.
- Registra todos los procesos realizados en la consola del navegador para asegurar trazabilidad.

🔹 **Servidor Express.js** para enviar tareas nuevas a un tablero Kanboard de forma automatizada desde el frontend.

## 🛠 Estructura del repositorio


## ⛔ Limitaciones encontradas

Por restricciones corporativas, no ha sido posible realizar las pruebas integradas completas, debido a:

1. El servidor con VPN y permisos de Kanboard corporativo no permite instalación de Node.js.
2. El entorno con permisos para ejecutar el script no tiene acceso a la VPN y al Kanboard empresarial.

Por lo tanto, el proyecto se encuentra en un **90% de avance funcional**, con todos los módulos desarrollados y pendientes únicamente de integración final en entorno real.

## ✅ Estado actual del desarrollo

- [x] Script 100% funcional en entorno real de BMC Remedy.
- [x] Servidor Express.js configurado para recibir tareas.
- [x] Estructura de integración con Kanboard lista.
- [ ] Pruebas completas de integración (pendientes por restricciones).
- [ ] Despliegue final.


## 📚 Referencias clave

- [Documentación BMC Remedy](https://docs.bmc.com/xwiki/bin/view/Main/)
- [Documentación Kanboard](https://docs.kanboard.org/v1/user/)
- [Node.js API Docs](https://nodejs.org/docs/latest/api/)
- [¿Qué es un script? - WebSelf](https://support.webself.net/hc/es-es/articles/204608708-Script)

---

## 👨‍💻 Autor

**Diego Andres Marciales Florez**  
Ingeniería de Software · Proyecto de Prácticas 2
- Fundacion Universitaria Compensar.  
📍 Colombia · 2025

---

> Este repositorio ha sido creado con fines académicos y de práctica profesional, demostrando habilidades en automatización, scripting, servidores backend y gestión de proyectos.


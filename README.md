PORTADA GENERAL

Universidad Técnica Nacional
Sede del Pacífico
Ingeniería en Tecnologías de la Información

Curso: ITI-621 Tecnologías y Sistemas Web III
Proyecto Final: Costa Rica Conecta

Profesor: Jorge Ruiz (York)

Integrantes:
- Yul Reyes Tapia
- Kristel Ugalde Amador
- Esmeralda Gonzalez Cordoba
- María Murillo Chaves
- Nailea Soto González

III Cuatrimestre 2026
Fecha de entrega: 09 de diciembre de 2026

------------------------------------------------------------------------

1. DESCRIPCIÓN DEL PROBLEMA A RESOLVER

En las comunidades de Costa Rica, los ciudadanos carecen de una herramienta digital unificada para reportar daños en infraestructura pública, llevar el control preventivo de su alimentación e hidratación y administrar el inventario diario de sus medicamentos. Al encontrarse estos procesos dispersos o gestionados de forma manual, se pierde trazabilidad sobre el estado de los reportes vecinales, se dificulta el seguimiento continuo de indicadores personales de salud y aumentan los olvidos o el desabastecimiento en tratamientos médicos.

Costa Rica Conecta soluciona este problema centralizando en un mismo portal web los reportes de infraestructura cantonal, el seguimiento nutricional y el control de medicamentos, articulados mediante un módulo transversal de trámites comunitarios y notificaciones en tiempo real.

------------------------------------------------------------------------

2. OBJETIVOS

1. Desarrollar un sistema seguro de autenticación y gestión de perfiles de usuario mediante Firebase Authentication, Cloud Firestore y Supabase Storage, integrado a un panel principal con indicadores en tiempo real.
2. Implementar los mantenimientos de reportes de infraestructura cantonal, citas nutricionales e inventario de medicamentos con almacenamiento de evidencia fotográfica en la nube, consultas filtradas y exportación de reportes en formato PDF.
3. Construir el proceso principal de trámites comunitarios con trazabilidad completa de estados desde su registro hasta su resolución, acompañado de alertas web mediante Firebase Cloud Messaging.

------------------------------------------------------------------------

3. DIAGRAMAS DE SECUENCIA UML (MERMAID)

3.1 Mantenimiento de Usuarios y Perfiles - Persona 1

<img width="7805" height="3745" alt="diagrama-persona 1" src="https://github.com/user-attachments/assets/d291ba35-b742-4a40-8f99-e3cd8ede6a7d" />



3.2 Mantenimiento de Infraestructura Cantonal - Persona 2



3.3 Mantenimiento de Salud y Seguimiento Nutricional - Persona 3



3.4 Mantenimiento de Control de Medicamentos - Persona 4



3.5 Proceso Principal: Gestión de Trámites Comunitarios - Persona 5


------------------------------------------------------------------------

4. CONCLUSIONES

4.1 Logro de objetivos

Se cumplieron los tres objetivos planteados mediante la integración funcional de la gestión de usuarios, los mantenimientos de infraestructura cantonal, seguimiento nutricional e inventario de medicamentos, y el flujo transversal de trámites comunitarios en un único portal web. La combinación de almacenamiento documental en Cloud Firestore con gestión multimedia en Supabase Storage permitió resolver las operaciones CRUD, los filtros de consulta y la generación de reportes en PDF dentro de una estructura modular.

4.2 Qué quedó pendiente por finalizar

Quedó pendiente la incorporación de roles administrativos diferenciados para entidades municipales, especialistas en nutrición y farmacias que permitan validar reportes o recetas directamente desde perfiles institucionales. También quedó pendiente habilitar el almacenamiento temporal sin conexión para permitir el registro de reportes en zonas con baja cobertura de internet y su posterior sincronización automática.

4.3 Pasos a seguir para dar continuidad al proyecto

Para dar continuidad al sistema, el primer paso es configurar reglas de seguridad granulares por propietario y rol en Cloud Firestore y políticas de escritura autenticada en Supabase Storage. Como segundo paso, se debe integrar un servicio de geocodificación inversa para autocompletar direcciones exactas por provincia, cantón y distrito en Costa Rica, seguido de pruebas integrales de rendimiento y validación con usuarios reales antes de un despliegue piloto comunitario.

4.4 Valoración de Google Firebase frente a MySQL

En comparación con MySQL, utilizado en proyectos anteriores, Google Firebase ofrece ventajas notables en rapidez de implementación, ya que integra autenticación lista para usar, alojamiento web directo y sincronización de datos en tiempo real sin necesidad de programar un servidor backend intermedio ni administrar infraestructura. Como desventajas frente a MySQL, Cloud Firestore carece de uniones nativas entre colecciones, integridad referencial estricta mediante llaves foráneas y consultas relacionales complejas con múltiples filtros simultáneos, lo que obliga a estructurar datos desnormalizados y controlar parte de las validaciones desde el cliente.

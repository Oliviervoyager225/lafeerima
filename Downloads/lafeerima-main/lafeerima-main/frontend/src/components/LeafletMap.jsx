// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import '../styles/LeafletMap.css';

// // Fix pour les icônes Leaflet avec Vite
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
//     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
// });

// export default function LeafletMap() {
//     const mapRef = useRef(null);
//     const mapInstanceRef = useRef(null);

//     useEffect(() => {
//         // Coordonnées de PISAM - Polyclinique Internationale Sainte Anne-Marie
//         const pisamCoordinates = [5.33684, -4.01335];

//         // Initialiser la carte seulement si elle n'existe pas déjà
//         if (!mapInstanceRef.current && mapRef.current) {
//             // Créer la carte
//             const map = L.map(mapRef.current, {
//                 center: pisamCoordinates,
//                 zoom: 16,
//                 zoomControl: true,
//                 scrollWheelZoom: true,
//                 dragging: true,
//                 touchZoom: true,
//             });

//             // Ajouter les tuiles OpenStreetMap
//             L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                 attribution: '© OpenStreetMap contributors',
//                 maxZoom: 19,
//             }).addTo(map);

//             // Créer une icône personnalisée avec la couleur #b0c428
//             const customIcon = L.divIcon({
//                 className: 'custom-marker',
//                 html: `
//           <div class="marker-pin">
//             <svg width="40" height="50" viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg">
//               <path d="M20 0C8.954 0 0 8.954 0 20c0 14 20 30 20 30s20-16 20-30C40 8.954 31.046 0 20 0z" 
//                     fill="#b0c428" 
//                     stroke="#fff" 
//                     stroke-width="2"/>
//               <circle cx="20" cy="20" r="8" fill="#fff"/>
//             </svg>
//           </div>
//         `,
//                 iconSize: [40, 50],
//                 iconAnchor: [20, 50],
//                 popupAnchor: [0, -50],
//             });

//             // Ajouter le marqueur PISAM
//             const marker = L.marker(pisamCoordinates, { icon: customIcon }).addTo(map);

//             // Ajouter un popup avec informations
//             marker.bindPopup(`
//         <div class="custom-popup">
//           <h3>PISAM</h3>
//           <p><strong>Polyclinique Internationale Sainte Anne-Marie</strong></p>
//           <p>📍 Avenue Joseph Blohorn, Cocody</p>
//           <p>📞 Abidjan, Côte d'Ivoire</p>
//           <a href="https://www.google.com/maps/dir/?api=1&destination=5.33684,-4.01335" 
//              target="_blank" 
//              rel="noopener noreferrer"
//              class="directions-link">
//             🧭 Obtenir l'itinéraire
//           </a>
//         </div>
//       `);

//             // Ouvrir le popup automatiquement
//             marker.openPopup();

//             // Ajouter un cercle de zone autour de PISAM
//             L.circle(pisamCoordinates, {
//                 color: '#b0c428',
//                 fillColor: '#b0c428',
//                 fillOpacity: 0.15,
//                 radius: 200, // 200 mètres
//                 weight: 2,
//             }).addTo(map);

//             mapInstanceRef.current = map;
//         }

//         // Cleanup
//         return () => {
//             if (mapInstanceRef.current) {
//                 mapInstanceRef.current.remove();
//                 mapInstanceRef.current = null;
//             }
//         };
//     }, []);

//     return (
//         <div className="leaflet-map-wrapper">
//             <div ref={mapRef} className="leaflet-map-container" />
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Coffee, Menu as MenuIcon, X, MapPin, Phone, Mail, MessageCircle, Users, Star, Clock, Send, Bot, Minimize2, Award, Heart, Leaf, TrendingUp, ChevronLeft, ChevronRight, CheckCircle, Building, Coins, BarChart3, GraduationCap, Package, Shield, Headphones, TrendingUp as Growth } from 'lucide-react';

// ========================================
// CAFÉ IMAGES (Unsplash - High Quality)
// ========================================
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80',
  coffee1: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
  coffee2: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
  interior: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80',
  barista: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&q=80',
  food: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=80',
  latte: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
  people: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
  aboutHero: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&q=80',
  beans: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
  sustainability: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
  community: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
  espresso: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80',
  cappuccino: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80',
  pastry: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
  sandwich: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80',
  londonCafe: 'https://images.unsplash.com/photo-1513267048331-5611cad62e41?w=800&q=80',
  manchesterCafe: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
  birminghamCafe: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=800&q=80',
  catering: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
  cateringSetup: 'https://images.unsplash.com/photo-1478145787956-f6f12c59624d?w=800&q=80',
  franchise: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&q=80',
  businessMeeting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  contact: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80',
  avocadoToast: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&q=80',
  eggsBenedict: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80',
  wrap: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80',
  salad: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80',
  americano: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
  flatwhite: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a2?w=800&q=80',
  mocha: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80',
  franchiseSupport: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
  training: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  cateringEvent: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
  corporateEvent: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
};

const CAROUSEL_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80',
    title: 'Premium Coffee Experience',
    subtitle: 'Artisan coffee crafted with passion'
  },
  {
    url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&q=80',
    title: 'Expert Baristas',
    subtitle: 'Every cup is a masterpiece'
  },
  {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80',
    title: 'Warm & Welcoming',
    subtitle: 'Your perfect work and relaxation space'
  },
  {
    url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=1600&q=80',
    title: 'Fresh Food Daily',
    subtitle: 'From breakfast to dinner, made with love'
  },
  {
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80',
    title: 'Community Hub',
    subtitle: 'Where friends meet and memories are made'
  },
];

// ========================================
// STYLES
// ========================================
const styles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --coffee-dark: #3E2723;
    --mocha: #5D4037;
    --beige: #D7CCC8;
    --cream: #F5F5DC;
    --soft-white: #FAFAFA;
    --soft-green: #7CB342;
    --gold: #C9A227;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: var(--soft-white);
    color: var(--coffee-dark);
    line-height: 1.6;
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--beige);
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--coffee-dark);
    text-decoration: none;
  }

  .logo svg { color: var(--soft-green); }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .nav-links a {
    color: var(--mocha);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }

  .nav-links a:hover { color: var(--soft-green); }

  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .mobile-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-bottom: 1px solid var(--beige);
    padding: 1rem 2rem;
  }

  .mobile-nav.open { display: block; }

  .mobile-nav a {
    display: block;
    padding: 0.75rem 0;
    color: var(--mocha);
    text-decoration: none;
    font-weight: 500;
  }

  /* CAROUSEL STYLES */
  .carousel-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .carousel-slide {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    background-size: cover;
    background-position: center;
  }

  .carousel-slide.active {
    opacity: 1;
  }

  .carousel-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(62, 39, 35, 0.85));
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6rem 2rem 2rem;
  }

  .carousel-content {
    max-width: 800px;
    z-index: 10;
  }

  .carousel-content h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  }

  .carousel-content .subtitle {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: #F5F5DC;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
    font-weight: 600;
  }

  .carousel-content .description {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  }

  .carousel-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.3);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    z-index: 10;
  }

  .carousel-nav-btn:hover {
    background: rgba(255, 255, 255, 0.6);
  }

  .carousel-nav-btn.prev { left: 2rem; }
  .carousel-nav-btn.next { right: 2rem; }

  .carousel-indicators {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.75rem;
    z-index: 10;
  }

  .carousel-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .carousel-indicator.active {
    background: white;
    width: 30px;
    border-radius: 6px;
  }

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6rem 2rem 2rem;
    background-size: cover;
    background-position: center;
    color: white;
    position: relative;
  }

  .hero-small { min-height: 50vh; }

  .hero-content { max-width: 800px; z-index: 10; }
  .hero h1 { 
    font-size: 4rem; 
    margin-bottom: 1rem; 
    font-weight: bold;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  }
  .hero .subtitle { 
    font-size: 1.75rem; 
    margin-bottom: 1rem; 
    color: #F5F5DC;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  }
  .hero .description { 
    font-size: 1.125rem; 
    margin-bottom: 2rem;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1.125rem;
    font-weight: 600;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 0.3s;
    border: 2px solid transparent;
    cursor: pointer;
  }

  .btn-primary { background: var(--soft-green); color: white; }
  .btn-primary:hover { background: #689F38; transform: translateY(-2px); }
  .btn-outline { border: 2px solid white; color: white; background: transparent; }
  .btn-outline:hover { background: white; color: var(--coffee-dark); }

  .section { padding: 5rem 2rem; }
  .container { max-width: 1200px; margin: 0 auto; }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--coffee-dark);
  }

  .section-subtitle {
    font-size: 1.25rem;
    text-align: center;
    color: var(--mocha);
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto 3rem;
  }

  .grid { display: grid; gap: 2rem; }
  .grid-3 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
  .grid-2 { grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); }

  .card {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 1px solid var(--beige);
    transition: all 0.3s;
  }

  .card:hover {
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transform: translateY(-5px);
  }

  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  .card-img-large { height: 300px; }

  .card-icon { width: 3rem; height: 3rem; color: var(--soft-green); margin-bottom: 1rem; }
  .card-title { font-size: 1.5rem; font-weight: bold; color: var(--coffee-dark); margin-bottom: 0.75rem; }
  .card-text { color: var(--mocha); opacity: 0.7; line-height: 1.8; }

  .menu-item {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--beige);
    display: flex;
    gap: 1rem;
    align-items: start;
    cursor: pointer;
    transition: all 0.3s;
  }

  .menu-item:hover {
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transform: translateX(5px);
    border-color: var(--soft-green);
  }

  .menu-item img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .menu-item-content { flex: 1; }

  .menu-item h4 {
    font-size: 1.25rem;
    color: var(--coffee-dark);
    margin-bottom: 0.25rem;
  }

  .menu-item p {
    color: var(--mocha);
    opacity: 0.7;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  .menu-item-price {
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--soft-green);
  }

  .menu-category {
    margin-bottom: 3rem;
  }

  .menu-category h3 {
    font-size: 2rem;
    color: var(--coffee-dark);
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--soft-green);
  }

  .location-card {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    border: 1px solid var(--beige);
  }

  .location-card h3 {
    font-size: 1.75rem;
    color: var(--coffee-dark);
    margin-bottom: 1rem;
  }

  .location-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 1.5rem 0;
  }

  .location-info-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--mocha);
  }

  .map-container {
    width: 100%;
    height: 350px;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-bottom: 1.5rem;
    border: 1px solid var(--beige);
  }

  .map-container iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .form-group { margin-bottom: 1.5rem; }

  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--coffee-dark);
  }

  .form-input,
  .form-textarea,
  .form-select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--beige);
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
  }

  .form-textarea {
    min-height: 120px;
    resize: vertical;
  }

  .form-input:focus,
  .form-textarea:focus,
  .form-select:focus {
    outline: none;
    border-color: var(--soft-green);
  }

  .btn-submit {
    width: 100%;
    background: var(--soft-green);
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .btn-submit:hover { background: #689F38; }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    text-align: center;
    margin: 3rem 0;
  }

  .stat-item { padding: 2rem; }

  .stat-number {
    font-size: 3rem;
    font-weight: bold;
    color: var(--soft-green);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1.125rem;
    color: var(--mocha);
  }

  .whatsapp-float {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    z-index: 998;
    background: #25D366;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    transition: all 0.3s;
    cursor: pointer;
    border: none;
  }

  .whatsapp-float:hover { 
    transform: scale(1.1);
    background: #20BA5A;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
  }

  .chatbot-button {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
    background: var(--coffee-dark);
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    cursor: pointer;
    border: none;
    transition: background 0.3s;
    animation: pulse 2s ease-in-out infinite;
  }

  .chatbot-button:hover { 
    background: var(--mocha);
    animation: none;
  }

  .chatbot-window {
    position: fixed;
    bottom: 6rem;
    right: 2rem;
    width: 380px;
    max-width: calc(100vw - 4rem);
    height: 500px;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    z-index: 999;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .chatbot-header {
    background: linear-gradient(135deg, var(--coffee-dark), var(--mocha));
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .chatbot-header h3 { 
    font-size: 1.125rem; 
    display: flex; 
    align-items: center; 
    gap: 0.5rem; 
  }

  .chatbot-close {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.25rem;
  }

  .chatbot-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    background: #f8f8f8;
  }

  .chat-message {
    margin-bottom: 1rem;
    display: flex;
    gap: 0.5rem;
  }

  .chat-message.user { flex-direction: row-reverse; }

  .bot-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--coffee-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
  }

  .message-bubble {
    max-width: 70%;
    padding: 0.75rem 1rem;
    border-radius: 1rem;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .message-bubble.bot {
    background: white;
    border: 1px solid var(--beige);
    color: var(--coffee-dark);
  }

  .message-bubble.user {
    background: var(--soft-green);
    color: white;
  }

  .bot-signature {
    font-size: 0.75rem;
    color: var(--mocha);
    opacity: 0.6;
    margin-top: 0.25rem;
    font-style: italic;
  }

  .chatbot-input {
    padding: 1rem;
    border-top: 1px solid var(--beige);
    display: flex;
    gap: 0.5rem;
  }

  .chatbot-input input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid var(--beige);
    border-radius: 1.5rem;
    font-size: 0.95rem;
  }

  .chatbot-input button {
    background: var(--soft-green);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .price-table {
    background: white;
    border: 1px solid var(--beige);
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 2rem 0;
  }

  .price-row {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--beige);
  }

  .price-row:last-child { border-bottom: none; }

  .price-label {
    font-weight: 600;
    color: var(--coffee-dark);
  }

  .price-value { color: var(--mocha); }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .modal-content {
    background: white;
    border-radius: 1rem;
    max-width: 700px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: slideUp 0.3s ease;
  }

  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    z-index: 10;
  }

  .modal-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .modal-body { padding: 2rem; }

  .modal-title {
    font-size: 2rem;
    font-weight: bold;
    color: var(--coffee-dark);
    margin-bottom: 0.5rem;
  }

  .modal-price {
    font-size: 1.75rem;
    font-weight: bold;
    color: var(--soft-green);
    margin-bottom: 1.5rem;
  }

  .modal-description {
    font-size: 1.125rem;
    color: var(--mocha);
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  .detail-section { margin-bottom: 1.5rem; }

  .detail-section h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--coffee-dark);
    margin-bottom: 0.75rem;
  }

  .detail-list {
    list-style: none;
    padding-left: 0;
  }

  .detail-list li {
    padding: 0.5rem 0;
    color: var(--mocha);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .detail-list li:before {
    content: "✓";
    color: var(--soft-green);
    font-weight: bold;
  }

  .badge {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .badge-vegan { background: #E8F5E9; color: #2E7D32; }
  .badge-popular { background: #FFF3E0; color: #E65100; }
  .badge-vegetarian { background: #E8F5E9; color: #2E7D32; }
  .badge-vegan-option,
  .badge-fresh-daily { background: #E3F2FD; color: #1565C0; }

  .timeline {
    position: relative;
    padding-left: 2rem;
  }

  .timeline-item {
    position: relative;
    padding-bottom: 2rem;
    border-left: 2px solid var(--beige);
    padding-left: 2rem;
  }

  .timeline-item:last-child { border-left: none; }

  .timeline-dot {
    position: absolute;
    left: -0.6rem;
    top: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--soft-green);
    border: 3px solid white;
    box-shadow: 0 0 0 2px var(--beige);
  }

  .timeline-content h4 {
    font-size: 1.125rem;
    color: var(--coffee-dark);
    margin-bottom: 0.5rem;
  }

  .timeline-content p {
    color: var(--mocha);
    opacity: 0.8;
  }

  .testimonial {
    background: var(--cream);
    padding: 1.5rem;
    border-radius: 0.5rem;
    border-left: 4px solid var(--soft-green);
    margin-bottom: 1.5rem;
  }

  .testimonial-text {
    font-size: 1.125rem;
    color: var(--coffee-dark);
    font-style: italic;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  .testimonial-author {
    font-weight: 600;
    color: var(--mocha);
  }

  .testimonial-role {
    font-size: 0.9rem;
    color: var(--mocha);
    opacity: 0.7;
  }

  .faq-item {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--beige);
    margin-bottom: 1rem;
  }

  .faq-question {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--coffee-dark);
    margin-bottom: 0.75rem;
  }
  
  */
@media (max-width: 768px) {
  .button-label {
    display: none !important;
  }
  
  .whatsapp-float,
  .chatbot-button {
    width: 55px !important;
    height: 55px !important;
  }

  .whatsapp-float {
    bottom: 1.5rem !important;
    left: 1.5rem !important;
  }

  .chatbot-button {
    bottom: 1.5rem !important;
    right: 1.5rem !important;
  }
}

  .faq-answer {
    color: var(--mocha);
    opacity: 0.8;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .mobile-menu-btn { display: block; }
    .carousel-content h1, .hero h1 { font-size: 2.5rem; }
    .chatbot-window { width: calc(100vw - 2rem); right: 1rem; }
    .section { padding: 3rem 1rem; }
    .menu-item { flex-direction: column; }
    .menu-item img { width: 100%; height: 150px; }
    .modal-content { margin: 1rem; }
    .carousel-nav-btn { width: 40px; height: 40px; }
    .carousel-nav-btn.prev { left: 1rem; }
    .carousel-nav-btn.next { right: 1rem; }
  }
`;

// ========================================
// IMAGE CAROUSEL
// ========================================
const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {CAROUSEL_IMAGES.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url('${slide.url}')` }}
        >
          <div className="carousel-overlay">
            <div className="carousel-content">
              <h1>Crema Café</h1>
              <p className="subtitle">{slide.title}</p>
              <p className="description">{slide.subtitle}</p>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-primary">
                  View Menu
                </Link>
                <a 
                  href="https://wa.me/447424366129?text=Hi%20Crema%20Café!%20I%20want%20to%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <MessageCircle size={20} />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* REMOVED ARROW BUTTONS - Only dot indicators */}
      <div className="carousel-indicators">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

// ========================================
// PRODUCT MODAL
// ========================================
const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappNumber = "447424366129";
  
  const handleOrder = () => {
    const message = `Hi Crema Café! 🏆\n\nI'd like to order:\n📦 ${product.name} - £${product.price}\n\nPlease confirm availability and delivery options.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        
        <img src={product.img} alt={product.name} className="modal-image" />
        
        <div className="modal-body">
          <div>
            {product.badges && product.badges.map((badge, idx) => (
              <span key={idx} className={`badge badge-${badge.toLowerCase().replace(' ', '-')}`}>
                {badge}
              </span>
            ))}
          </div>

          <h2 className="modal-title">{product.name}</h2>
          <div className="modal-price">£{product.price}</div>
          <p className="modal-description">{product.longDesc || product.desc}</p>

          {product.ingredients && (
            <div className="detail-section">
              <h4>Ingredients</h4>
              <p className="card-text">{product.ingredients}</p>
            </div>
          )}

          {product.features && (
            <div className="detail-section">
              <h4>Features</h4>
              <ul className="detail-list">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {product.nutrition && (
            <div className="detail-section">
              <h4>Nutrition Info</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {Object.entries(product.nutrition).map(([key, value]) => (
                  <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', background: 'var(--cream)', borderRadius: '0.25rem' }}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>
                    <span style={{ fontWeight: 'bold' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {product.allergens && (
            <div className="detail-section">
              <h4>Allergen Information</h4>
              <p className="card-text" style={{ fontSize: '0.95rem' }}>
                Contains: {product.allergens.join(', ')}
              </p>
            </div>
          )}

          <button 
            className="btn-submit"
            onClick={handleOrder}
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

// ========================================
// CHATBOT WITH BRANDED MESSAGES
// ========================================

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! 👋 Welcome to Crema Café. I'm your virtual barista. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const suggestedQuestions = [
    { text: "Show me the menu", icon: "📋" },
    { text: "What are your hours?", icon: "🕐" },
    { text: "Where are you located?", icon: "📍" },
    { text: "Catering services", icon: "🎉" },
    { text: "Franchise opportunity", icon: "💼" },
    { text: "Order coffee", icon: "☕" },
  ];

  const botResponses = {
    menu: "Our menu features artisan coffee (Espresso £2.80, Cappuccino £3.50, Latte £3.50), fresh pastries (£2.50-£4.00), and meals (£5.50-£8.50). We also have vegan and gluten-free options! What would you like to know more about?",
    hours: "We're open Mon-Fri: 7am-8pm, Sat-Sun: 8am-6pm at most locations. Shoreditch & Covent Garden stay open until 9pm. Which outlet are you interested in?",
    locations: "We have cafés in:\n🏙️ London: Shoreditch, Covent Garden\n🏙️ Manchester: Northern Quarter\n🏙️ Birmingham: Jewellery Quarter\n\nWhich city works for you?",
    order: "Great choice! You can:\n1. Order via WhatsApp (instant) 📱\n2. Visit any location 🏪\n3. Use our catering service for bulk orders 🎉\n\nWould you like me to connect you to WhatsApp?",
    catering: "We offer:\n☕ Coffee stations with professional baristas\n🥐 Breakfast catering packages\n🍽️ Lunch & dinner catering\n🎉 Full event management\n\nPerfect for corporate events, weddings, and celebrations! Shall I connect you with our catering team?",
    franchise: "Crema Café franchise opportunity:\n💰 Investment: £150k-£250k\n📈 Proven business model (18-24 month ROI)\n👨‍🏫 Full 4-week training program\n📊 Marketing & tech support included\n\nWould you like detailed franchise information sent to you?",
    pricing: "Our pricing:\n☕ Espresso: £2.80\n☕ Cappuccino/Latte: £3.50\n☕ Flat White: £3.50\n🥐 Pastries: £2.50-£4.00\n🥪 Sandwiches: £5.50-£7.50\n🍽️ Meals: £6.50-£8.50\n\nAll made fresh with premium ingredients!",
    default: "I can help you with:\n• Our menu & pricing 📋\n• Locations & hours 📍\n• Ordering coffee ☕\n• Catering services 🎉\n• Franchise opportunities 💼\n\nWhat interests you most?",
  };

  const handleSend = (messageText = null) => {
    const textToSend = messageText || input;
    if (!textToSend.trim()) return;

    const userMessage = { type: 'user', text: textToSend };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);
    setShowSuggestions(false);

    setTimeout(() => {
      const lowerInput = textToSend.toLowerCase();
      let response = botResponses.default;

      if (lowerInput.includes('menu') || lowerInput.includes('food') || lowerInput.includes('coffee')) {
        response = botResponses.menu;
      } else if (lowerInput.includes('hour') || lowerInput.includes('time') || lowerInput.includes('open')) {
        response = botResponses.hours;
      } else if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('address')) {
        response = botResponses.locations;
      } else if (lowerInput.includes('order') || lowerInput.includes('buy')) {
        response = botResponses.order;
      } else if (lowerInput.includes('cater') || lowerInput.includes('event')) {
        response = botResponses.catering;
      } else if (lowerInput.includes('franchise') || lowerInput.includes('business') || lowerInput.includes('invest')) {
        response = botResponses.franchise;
      } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much')) {
        response = botResponses.pricing;
      }

      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
      setShowSuggestions(true);
    }, 1000);
  };

  return (
    <>
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999 }}>
        {/* Text Label - Always Visible when closed */}
        {!isOpen && (
          <div style={{
            position: 'absolute',
            bottom: '75px',
            right: '0',
            background: 'white',
            color: 'var(--coffee-dark)',
            padding: '0.75rem 1.25rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            whiteSpace: 'nowrap',
            fontSize: '0.95rem',
            fontWeight: '600',
            pointerEvents: 'none'
          }}>
            Ask me anything
          </div>
        )}

        <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Minimize2 size={24} /> : <Bot size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>
              <Coffee size={20} />
              Crema Café Assistant
            </h3>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.type}`}>
                {msg.type === 'bot' && (
                  <div className="bot-avatar">
                    <Coffee size={18} />
                  </div>
                )}
                <div>
                  <div className={`message-bubble ${msg.type}`}>
                    {msg.text}
                  </div>
                  {msg.type === 'bot' && (
                    <div className="bot-signature">— Crema Café AI Barista ☕</div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot">
                <div className="bot-avatar">
                  <Coffee size={18} />
                </div>
                <div>
                  <div className="message-bubble bot">Typing...</div>
                </div>
              </div>
            )}

            {/* SUGGESTED QUESTIONS */}
            {showSuggestions && !isTyping && (
              <div style={{ marginTop: '1rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--mocha)', marginBottom: '0.5rem', paddingLeft: '0.5rem', opacity: 0.7 }}>
                  Suggested questions:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {suggestedQuestions.map((question, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(question.text)}
                      style={{
                        background: 'white',
                        border: '1px solid var(--beige)',
                        borderRadius: '1rem',
                        padding: '0.5rem 0.75rem',
                        fontSize: '0.85rem',
                        color: 'var(--coffee-dark)',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--soft-green)';
                        e.target.style.color = 'white';
                        e.target.style.borderColor = 'var(--soft-green)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'white';
                        e.target.style.color = 'var(--coffee-dark)';
                        e.target.style.borderColor = 'var(--beige)';
                      }}
                    >
                      <span>{question.icon}</span>
                      <span>{question.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={() => handleSend()}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// ========================================
// NAVIGATION
// ========================================
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/menu', label: 'Menu' },
    { path: '/locations', label: 'Locations' },
    { path: '/catering', label: 'Catering' },
    { path: '/franchise', label: 'Franchise' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">
          <Coffee size={32} />
          <span>Crema Café</span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

// ========================================
// WHATSAPP BUTTON
// ========================================
const WhatsAppButton = () => {
  return (
    <div style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 998, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
      {/* Text Label Above */}
      <div style={{
        background: 'white',
        color: 'var(--coffee-dark)',
        padding: '0.75rem 1.25rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
        whiteSpace: 'nowrap',
        fontSize: '0.95rem',
        fontWeight: '600'
      }}>
        Order on WhatsApp
      </div>
      
      {/* WhatsApp Button Below */}
      <a
        href="https://wa.me/447424366129?text=Hi%20Crema%20Café!%20☕%20I'd%20like%20to%20order."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          background: '#25D366',
          color: 'white',
          borderRadius: '50%',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          transition: 'all 0.3s',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.background = '#20BA5A';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.background = '#25D366';
        }}
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};



// ========================================
// HOME PAGE
// ========================================
const HomePage = () => {
  return (
    <div>
      <ImageCarousel />

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">What Makes Us Special</h2>
          <p className="section-subtitle">
            Three pillars of excellence that define the Crema experience
          </p>

          <div className="grid grid-3">
            <div className="card">
              <img src={IMAGES.coffee1} alt="Artisan Coffee" className="card-img" />
              <Coffee className="card-icon" />
              <h3 className="card-title">Artisan Coffee</h3>
              <p className="card-text">
                Single-origin beans from ethical farms, roasted in-house weekly. Each cup is a masterpiece crafted by expert baristas trained in the art of espresso.
              </p>
            </div>

            <div className="card">
              <img src={IMAGES.food} alt="Fresh Food" className="card-img" />
              <Users className="card-icon" />
              <h3 className="card-title">Fresh Food Daily</h3>
              <p className="card-text">
                From hearty breakfasts to gourmet lunches, every dish features locally sourced ingredients prepared fresh each morning by our passionate culinary team.
              </p>
            </div>

            <div className="card">
              <img src={IMAGES.interior} alt="Warm Atmosphere" className="card-img" />
              <Star className="card-icon" />
              <h3 className="card-title">Warm Atmosphere</h3>
              <p className="card-text">
                Thoughtfully designed spaces that blend modern aesthetics with cozy comfort. Perfect for work, relaxation, or meeting friends over exceptional coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid grid-2">
            {[
              { path: '/menu', title: 'Explore Our Menu', desc: 'Discover our selection of premium coffees, fresh pastries, and delicious meals', img: IMAGES.latte },
              { path: '/locations', title: 'Find Us', desc: 'Visit our welcoming cafés across London, Manchester, and Birmingham', img: IMAGES.people },
              { path: '/catering', title: 'Corporate Catering', desc: 'Elevate your events with our professional coffee stations and catering services', img: IMAGES.barista },
              { path: '/franchise', title: 'Franchise Opportunities', desc: 'Join the Crema family and bring exceptional coffee to your community', img: IMAGES.coffee2 },
            ].map((item) => (
              <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <img src={item.img} alt={item.title} className="card-img" />
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, var(--coffee-dark), var(--mocha))', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title" style={{ color: 'white' }}>Ready to Experience Crema?</h2>
          <p className="section-subtitle" style={{ color: 'var(--cream)' }}>
            Visit us today or get in touch for orders, catering, or franchise opportunities
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/locations" className="btn btn-primary">
              Find a Location
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// ========================================
// ABOUT PAGE
// ========================================
const AboutPage = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="hero hero-small" style={{ backgroundImage: `linear-gradient(rgba(62, 39, 35, 0.7), rgba(93, 64, 55, 0.8)), url('${IMAGES.aboutHero}')` }}>
        <div className="hero-content">
          <h1>About Crema Café</h1>
          <p className="subtitle">Our Story, Our Vision, Our Commitment to Excellence</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="content-section">
            <h3>The Crema Story - From One Café to a Movement</h3>
            <p>
              Founded in 2018 by coffee enthusiasts James Harper and Sofia Rodriguez, Crema Café began with a simple yet powerful mission: to bring exceptional coffee and genuine hospitality to communities across the UK. What started as a single café in London's vibrant Shoreditch neighborhood has grown into a beloved brand with locations across London, Manchester, and Birmingham.
            </p>
            <p>
              Our name "Crema" represents the golden layer that forms on perfectly extracted espresso – a symbol of quality, care, and the artistry we bring to every cup. This attention to detail extends beyond our coffee to encompass every aspect of the Crema experience, from the beans we source to the communities we serve.
            </p>
            <p>
              Today, we serve over 50,000 customers monthly across our five locations, but we've never lost sight of what makes us special: treating each cup as a craft, each customer as a friend, and each café as a community hub. Our commitment to quality, sustainability, and authentic hospitality has earned us a loyal following and consistent 4.8-star ratings across all review platforms.
            </p>
          </div>

          {/* KPIs - REMOVED 2018 */}
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">UK Locations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50k+</div>
              <div className="stat-label">Monthly Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8★</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Customer Retention</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Events Catered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title" style={{ fontSize: '1.75rem' }}>Our Mission</h3>
              <p className="card-text" style={{ fontSize: '1.125rem' }}>
                To create welcoming spaces where exceptional coffee, fresh food, and genuine hospitality bring communities together. We're committed to serving the finest coffee while building meaningful connections with every customer, every day.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title" style={{ fontSize: '1.75rem' }}>Our Vision</h3>
              <p className="card-text" style={{ fontSize: '1.125rem' }}>
                To become the UK's most loved café brand, known for uncompromising quality, sustainable practices, and creating positive impact in every community we serve. We envision Crema Café as the heartbeat of neighborhoods across Britain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide every decision we make and every cup we serve
          </p>

          <div className="grid grid-3">
            <div className="card">
              <img src={IMAGES.beans} alt="Quality" className="card-img" />
              <Award className="card-icon" />
              <h3 className="card-title">Quality Without Compromise</h3>
              <p className="card-text">
                We source only the finest arabica beans from ethical farms in Ethiopia, Colombia, and Brazil. Each batch is roasted in-house weekly to perfection, bringing out unique flavor profiles. Our baristas undergo rigorous SCA-accredited training to ensure every cup meets our exacting standards. Quality isn't just a goal – it's our non-negotiable foundation.
              </p>
            </div>

            <div className="card">
              <img src={IMAGES.community} alt="Community" className="card-img" />
              <Heart className="card-icon" />
              <h3 className="card-title">Community at Heart</h3>
              <p className="card-text">
                Every Crema Café is designed to be more than a coffee shop – it's a welcoming third space where people connect, work, and create memories. We host monthly latte art competitions, coffee tasting workshops, and support local artists by featuring their work on our walls. Over 60% of our staff are hired from the local neighborhoods we serve.
              </p>
            </div>

            <div className="card">
              <img src={IMAGES.sustainability} alt="Sustainability" className="card-img" />
              <Leaf className="card-icon" />
              <h3 className="card-title">Sustainable Future</h3>
              <p className="card-text">
                From bean to cup, we're committed to sustainable practices. We've achieved B-Corp certification, use 100% recyclable packaging, offset our carbon emissions, and maintain direct relationships with coffee farming cooperatives ensuring fair wages. Our goal: zero waste by 2027 across all locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">What Makes Us Different</h2>
          <p className="section-subtitle">
            The Crema difference goes beyond great coffee – it's the complete experience
          </p>

          <div className="grid grid-2">
            <div className="card">
              <h4 className="card-title">Coffee Excellence</h4>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {[
                  'Direct trade relationships with coffee farmers ensuring fair prices',
                  'In-house roasting facility for maximum freshness',
                  'Comprehensive barista training program',
                  'SCA-certified baristas with ongoing development',
                  'Signature blend developed over 2 years',
                  'Weekly cupping sessions for quality control',
                ].map((item, index) => (
                  <div key={index} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--beige)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Star size={16} color="var(--soft-green)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h4 className="card-title">Customer Experience</h4>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {[
                  'Locally sourced food ingredients from UK suppliers',
                  'Eco-friendly packaging (B-Corp certified)',
                  'Community events and coffee workshops',
                  'Free Wi-Fi and laptop-friendly environment',
                  'Loyalty program with exclusive benefits',
                  'Personalized service from our baristas',
                ].map((item, index) => (
                  <div key={index} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--beige)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Star size={16} color="var(--soft-green)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Journey */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Our Coffee Journey</h2>
          <p className="section-subtitle">
            From farm to cup, we control every step to ensure exceptional quality
          </p>

          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <img src={IMAGES.beans} alt="Coffee Beans" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '2rem' }} />
              
              <div className="card">
                <h4 className="card-title">Sourcing & Relationships</h4>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  We work directly with farming cooperatives in Ethiopia, Colombia, and Brazil, visiting our partner farms annually to ensure quality and fair labor practices. Our direct trade model ensures farmers receive 30-40% above Fair Trade minimum prices.
                </p>
                <ul className="detail-list">
                  <li>3 origin countries with long-term partnerships</li>
                  <li>Annual farm visits and relationship building</li>
                  <li>30-40% above Fair Trade pricing</li>
                  <li>Support for sustainable farming practices</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="card" style={{ marginBottom: '2rem' }}>
                <h4 className="card-title">Roasting & Quality Control</h4>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Our London roasting facility produces small batches weekly, ensuring maximum freshness. Each batch undergoes rigorous quality control including cupping sessions with our master roaster and senior baristas.
                </p>
                <ul className="detail-list">
                  <li>Small-batch roasting for optimal freshness</li>
                  <li>Delivered to cafés within 7 days of roasting</li>
                  <li>Weekly cupping and quality assessment</li>
                  <li>Precise temperature and time profiles</li>
                  <li>Complete traceability from farm to cup</li>
                </ul>
              </div>

              <div className="card">
                <h4 className="card-title">Barista Training & Standards</h4>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Every Crema barista completes our comprehensive training program, achieving SCA certification and mastering the art of espresso extraction, milk texturing, and latte art.
                </p>
                <ul className="detail-list">
                  <li>2-week intensive barista training</li>
                  <li>SCA certification required</li>
                  <li>Ongoing skill development workshops</li>
                  <li>Monthly latte art competitions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">Our Sustainability Commitment</h2>
          <p className="section-subtitle">
            Building a better future for coffee, communities, and our planet
          </p>

          <div className="grid grid-3">
            {[
              {
                icon: <Leaf size={32} />,
                title: 'Environmental Impact',
                points: [
                  'B-Corp certified since 2021',
                  '100% recyclable packaging',
                  'Carbon offset program',
                  'Renewable energy in roasting facility',
                  'Zero-waste goal by 2027',
                ]
              },
              {
                icon: <Heart size={32} />,
                title: 'Social Responsibility',
                points: [
                  'Fair Trade partnerships',
                  '30-40% above minimum prices',
                  'Education funding for farmers',
                  'Living wage employer',
                  'Charity partnerships',
                ]
              },
              {
                icon: <Users size={32} />,
                title: 'Local Community',
                points: [
                  '60% staff from local areas',
                  'Monthly community events',
                  'Local artist showcase',
                  'Free space for nonprofits',
                  'Student discounts',
                ]
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <div style={{ color: 'var(--soft-green)', marginBottom: '1rem' }}>{item.icon}</div>
                <h4 className="card-title">{item.title}</h4>
                <ul className="detail-list">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Our Team & Culture</h2>
          <p className="section-subtitle">
            Meet the people behind the perfect cup
          </p>

          <div className="grid grid-2">
            <div>
              <img src={IMAGES.barista} alt="Our Team" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '2rem' }} />
            </div>

            <div>
              <div className="card">
                <h4 className="card-title">Our People-First Philosophy</h4>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  At Crema, we believe great coffee starts with great people. We invest heavily in our team through competitive wages, comprehensive benefits, and continuous development opportunities.
                </p>
                <ul className="detail-list">
                  <li>Living wage employer across all locations</li>
                  <li>Full health benefits for full-time staff</li>
                  <li>Clear career progression pathways</li>
                  <li>75% internal promotion rate</li>
                  <li>Quarterly team building events</li>
                  <li>Educational support and certifications</li>
                  <li>Flexible scheduling for work-life balance</li>
                  <li>Annual team trip for top performers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">Awards & Recognition</h2>
          <p className="section-subtitle">
            Honored to be recognized by customers and industry leaders
          </p>

          <div className="grid grid-3">
            {[
              { year: '2024', award: 'Best Coffee Chain UK', org: 'British Coffee Association' },
              { year: '2023', award: 'Best Employer - Hospitality', org: 'Sunday Times' },
              { year: '2023', award: 'Sustainable Business Award', org: 'Green Business Council' },
              { year: '2022', award: 'Best Independent Café', org: 'Caffeine Magazine' },
              { year: '2021', award: 'B-Corp Certification', org: 'B Lab UK' },
              { year: '2021', award: 'Community Impact Award', org: 'London Business Awards' },
            ].map((item, index) => (
              <div key={index} style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--beige)', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--soft-green)', marginBottom: '0.5rem' }}>{item.year}</div>
                <div style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--coffee-dark)', marginBottom: '0.5rem' }}>{item.award}</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--mocha)', opacity: 0.7 }}>{item.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Story */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Meet Our Founders</h2>
          <p className="section-subtitle">
            The visionaries behind Crema Café
          </p>

          <div className="grid grid-2">
            <div className="card">
              <h4 className="card-title">James Harper - Co-Founder & CEO</h4>
              <p className="card-text" style={{ marginBottom: '1rem' }}>
                A former investment banker turned coffee entrepreneur, James fell in love with specialty coffee during a trip to Melbourne in 2016. After training with world champion baristas and spending months visiting coffee farms, he returned to London with a vision: to create cafés that serve world-class coffee in warm, welcoming spaces.
              </p>
              <p className="card-text">
                James oversees overall strategy, franchise development, and maintains our coffee quality standards through regular cupping sessions at our roasting facility.
              </p>
            </div>

            <div className="card">
              <h4 className="card-title">Sofia Rodriguez - Co-Founder & COO</h4>
              <p className="card-text" style={{ marginBottom: '1rem' }}>
                With 15 years of hospitality experience including senior roles at premium hotel chains, Sofia brings operational excellence and a passion for service. Her background in creating memorable guest experiences shapes every detail of the Crema customer journey.
              </p>
              <p className="card-text">
                Sofia leads operations, staff training, and community initiatives. She personally designed our sustainability program and oversees our social impact efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--coffee-dark), var(--mocha))', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1.5rem' }}>Be Part of Our Story</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--cream)' }}>
            Whether you want to work with us, partner with us, or bring Crema Café to your community through our franchise program, we'd love to hear from you.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/franchise" className="btn btn-primary">
              Franchise Opportunities
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
// ========================================
// MENU PAGE
// ========================================
const MenuPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const whatsappNumber = "447424366129";

  const coffeeMenu = [
    { 
      name: 'Espresso', 
      desc: 'Rich and bold, single or double shot from our signature blend', 
      img: IMAGES.espresso,
      price: '2.80',
      longDesc: 'Our signature espresso is crafted from a carefully balanced blend of Ethiopian and Colombian beans, roasted to bring out notes of dark chocolate, caramel, and a hint of citrus. Extracted at precise temperature and pressure for the perfect 25-second shot.',
      features: ['Single origin arabica beans', 'Roasted in-house weekly', 'Extracted at 9 bar pressure', 'Served at optimal 92°C'],
      nutrition: { calories: '5 kcal', caffeine: '63mg', fat: '0g', carbs: '1g' },
      allergens: ['None'],
      badges: ['Popular']
    },
    { 
      name: 'Americano', 
      desc: 'Smooth espresso with hot water, perfect balance of strength and flavor', 
      img: IMAGES.americano,
      price: '3.20',
      longDesc: 'A double shot of our signature espresso topped with hot water to create a smooth, rich coffee with a beautiful crema layer.',
      features: ['Double espresso shot', 'Filtered hot water', 'Maintains crema layer', 'Available hot or iced'],
      nutrition: { calories: '10 kcal', caffeine: '126mg', fat: '0g', carbs: '2g' },
      allergens: ['None']
    },
    { 
      name: 'Cappuccino', 
      desc: 'Classic Italian favorite with perfectly steamed milk and foam', 
      img: IMAGES.cappuccino,
      price: '3.50',
      longDesc: 'Traditional Italian cappuccino with equal parts espresso, steamed milk, and microfoam. Finished with latte art.',
      features: ['Equal parts espresso, milk, foam', 'Microfoam texture', 'Latte art included', 'Optional cocoa or cinnamon'],
      nutrition: { calories: '120 kcal', caffeine: '63mg', fat: '4g', carbs: '11g' },
      allergens: ['Milk'],
      badges: ['Popular']
    },
    { 
      name: 'Latte', 
      desc: 'Smooth and creamy with expertly textured microfoam', 
      img: IMAGES.latte,
      price: '3.50',
      longDesc: 'Silky smooth latte made with a double shot of espresso and perfectly steamed milk. Available with alternative milks.',
      features: ['Double espresso shot', 'Velvety steamed milk', 'Alternative milk options', 'Flavor shots available'],
      nutrition: { calories: '190 kcal', caffeine: '126mg', fat: '7g', carbs: '18g' },
      allergens: ['Milk'],
      badges: ['Popular', 'Vegan Option']
    },
    { 
      name: 'Flat White', 
      desc: 'Australian specialty with velvety microfoam and strong espresso', 
      img: IMAGES.flatwhite,
      price: '3.50',
      longDesc: 'Our flat white features a double ristretto shot with silky microfoam milk. Stronger coffee flavor with velvety texture.',
      features: ['Double ristretto shot', 'Silky microfoam', 'Strong coffee flavor', 'Perfect milk-to-coffee ratio'],
      nutrition: { calories: '120 kcal', caffeine: '130mg', fat: '4.5g', carbs: '10g' },
      allergens: ['Milk']
    },
    { 
      name: 'Mocha', 
      desc: 'Indulgent blend of espresso, steamed milk, and Belgian chocolate', 
      img: IMAGES.mocha,
      price: '4.20',
      longDesc: 'Decadent mocha combining rich espresso with premium Belgian chocolate sauce and steamed milk. Topped with whipped cream.',
      features: ['Premium Belgian chocolate', 'Double espresso shot', 'Whipped cream topping', 'Chocolate shavings'],
      nutrition: { calories: '290 kcal', caffeine: '126mg', fat: '11g', carbs: '35g' },
      allergens: ['Milk', 'Soy']
    },
  ];

  const foodMenu = [
    { 
      name: 'Avocado Toast', 
      desc: 'Sourdough, smashed avocado, cherry tomatoes, feta, poached egg', 
      img: IMAGES.avocadoToast,
      price: '7.50',
      longDesc: 'Fresh avocado smashed with lime and sea salt on toasted artisan sourdough. Topped with cherry tomatoes, feta, poached egg.',
      ingredients: 'Sourdough bread, fresh avocado, cherry tomatoes, feta cheese, free-range eggs, olive oil, lime, sea salt',
      features: ['Locally baked sourdough', 'Fresh daily ingredients', 'Free-range eggs', 'Gluten-free option available'],
      nutrition: { calories: '420 kcal', protein: '18g', fat: '24g', carbs: '35g' },
      allergens: ['Gluten', 'Eggs', 'Dairy'],
      badges: ['Popular', 'Vegetarian']
    },
    { 
      name: 'Eggs Benedict', 
      desc: 'English muffin, poached eggs, hollandaise sauce, choice of bacon or salmon', 
      img: IMAGES.eggsBenedict,
      price: '8.50',
      longDesc: 'Classic brunch favorite with perfectly poached free-range eggs on toasted English muffin with bacon or salmon.',
      ingredients: 'English muffin, free-range eggs, hollandaise sauce, bacon or smoked salmon, chives',
      features: ['House-made hollandaise', 'Free-range eggs', 'Choice of bacon or salmon', 'Served with side salad'],
      nutrition: { calories: '480 kcal', protein: '22g', fat: '28g', carbs: '32g' },
      allergens: ['Gluten', 'Eggs', 'Dairy', 'Fish (salmon)'],
      badges: ['Popular']
    },
    { 
      name: 'Breakfast Wrap', 
      desc: 'Scrambled eggs, bacon, cheese, peppers, spinach in soft tortilla', 
      img: IMAGES.wrap,
      price: '6.50',
      longDesc: 'Hearty breakfast wrap with fluffy scrambled eggs, crispy bacon, cheddar, peppers, spinach. Served with hash browns.',
      ingredients: 'Flour tortilla, free-range eggs, bacon, cheddar cheese, bell peppers, spinach, hash browns',
      features: ['Made to order', 'Includes hash browns', 'Vegetarian option available', 'Served with salsa'],
      nutrition: { calories: '520 kcal', protein: '24g', fat: '26g', carbs: '45g' },
      allergens: ['Gluten', 'Eggs', 'Dairy']
    },
    { 
      name: 'Caesar Salad', 
      desc: 'Romaine, parmesan, croutons, Caesar dressing, grilled chicken option', 
      img: IMAGES.salad,
      price: '7.50',
      longDesc: 'Fresh romaine lettuce with house-made Caesar dressing, shaved parmesan, crispy croutons. Add chicken for protein.',
      ingredients: 'Romaine lettuce, parmesan cheese, croutons, Caesar dressing, anchovies, optional chicken',
      features: ['House-made dressing', 'Freshly shaved parmesan', 'Add chicken +£2.50', 'GF option available'],
      nutrition: { calories: '380 kcal', protein: '12g', fat: '28g', carbs: '22g' },
      allergens: ['Gluten', 'Dairy', 'Fish', 'Eggs']
    },
    { 
      name: 'Club Sandwich', 
      desc: 'Triple-decker with chicken, bacon, lettuce, tomato, mayo', 
      img: IMAGES.sandwich,
      price: '7.50',
      longDesc: 'Classic triple-decker with grilled chicken, bacon, lettuce, tomatoes, mayo. Served with fries and coleslaw.',
      ingredients: 'Bread, chicken breast, bacon, lettuce, tomato, mayo, fries, coleslaw',
      features: ['Grilled chicken breast', 'Crispy bacon', 'Includes fries & coleslaw', 'Choice of bread'],
      nutrition: { calories: '680 kcal', protein: '35g', fat: '32g', carbs: '55g' },
      allergens: ['Gluten', 'Eggs', 'Dairy']
    },
    { 
      name: 'Pasta Primavera', 
      desc: 'Fresh seasonal vegetables, olive oil, garlic, parmesan', 
      img: IMAGES.food,
      price: '8.50',
      longDesc: 'Light pasta with seasonal vegetables sautéed in garlic and olive oil. Finished with parmesan and basil.',
      ingredients: 'Penne pasta, zucchini, bell peppers, cherry tomatoes, garlic, olive oil, parmesan, basil',
      features: ['Fresh seasonal vegetables', 'Extra virgin olive oil', 'Vegetarian', 'Vegan option available'],
      nutrition: { calories: '520 kcal', protein: '16g', fat: '18g', carbs: '72g' },
      allergens: ['Gluten', 'Dairy'],
      badges: ['Vegetarian', 'Vegan Option']
    },
  ];

  const pastriesMenu = [
    { 
      name: 'Butter Croissant', 
      desc: 'Flaky, buttery perfection baked fresh daily', 
      img: IMAGES.pastry,
      price: '2.50',
      longDesc: 'Authentic French butter croissant with countless flaky layers, golden exterior, and soft buttery interior.',
      ingredients: 'Flour, butter (French), sugar, yeast, milk, eggs, salt',
      features: ['Baked fresh daily', 'Traditional French recipe', 'Premium butter', 'Perfect with coffee'],
      nutrition: { calories: '220 kcal', protein: '4g', fat: '12g', carbs: '24g' },
      allergens: ['Gluten', 'Dairy', 'Eggs'],
      badges: ['Fresh Daily']
    },
    { 
      name: 'Almond Croissant', 
      desc: 'Filled with almond cream and topped with toasted almonds', 
      img: IMAGES.pastry,
      price: '3.50',
      longDesc: 'Decadent almond croissant filled with rich almond cream and topped with sliced almonds and powdered sugar.',
      ingredients: 'Butter croissant, almond cream, sliced almonds, powdered sugar',
      features: ['House-made almond cream', 'Toasted almond topping', 'Light & flaky', 'Perfect indulgence'],
      nutrition: { calories: '380 kcal', protein: '8g', fat: '22g', carbs: '38g' },
      allergens: ['Gluten', 'Dairy', 'Eggs', 'Nuts'],
      badges: ['Popular']
    },
    { 
      name: 'Chocolate Muffin', 
      desc: 'Double chocolate muffin with chocolate chips', 
      img: IMAGES.pastry,
      price: '3.00',
      longDesc: 'Rich cocoa muffin loaded with dark and milk chocolate chips. Moist, fluffy texture with intense chocolate flavor.',
      ingredients: 'Flour, cocoa powder, chocolate chips, sugar, eggs, butter, buttermilk, vanilla',
      features: ['Double chocolate', 'Moist & fluffy', 'Dark & milk chips', 'Baked fresh daily'],
      nutrition: { calories: '420 kcal', protein: '6g', fat: '20g', carbs: '54g' },
      allergens: ['Gluten', 'Dairy', 'Eggs', 'Soy']
    },
    { 
      name: 'Blueberry Muffin', 
      desc: 'Loaded with fresh blueberries and lemon zest', 
      img: IMAGES.pastry,
      price: '3.00',
      longDesc: 'Bursting with fresh blueberries and brightened with lemon zest. Light, fluffy texture with golden crust.',
      ingredients: 'Flour, fresh blueberries, sugar, eggs, butter, buttermilk, lemon zest, vanilla',
      features: ['Fresh blueberries', 'Lemon zest', 'Crumb topping', 'Lower sugar option'],
      nutrition: { calories: '340 kcal', protein: '5g', fat: '14g', carbs: '48g' },
      allergens: ['Gluten', 'Dairy', 'Eggs']
    },
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="hero hero-small" style={{ backgroundImage: `linear-gradient(rgba(62, 39, 35, 0.7), rgba(93, 64, 55, 0.8)), url('${IMAGES.latte}')` }}>
        <div className="hero-content">
          <h1>Our Menu</h1>
          <p className="subtitle">Carefully Crafted, Lovingly Served</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="menu-category">
            <h3>☕ Coffee & Beverages</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {coffeeMenu.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => setSelectedProduct(item)}>
                  <img src={item.img} alt={item.name} />
                  <div className="menu-item-content">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                    <div className="menu-item-price">£{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="menu-category">
            <h3>🍽️ Food</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {foodMenu.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => setSelectedProduct(item)}>
                  <img src={item.img} alt={item.name} />
                  <div className="menu-item-content">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                    <div className="menu-item-price">£{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="menu-category">
            <h3>🥐 Pastries & Snacks</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {pastriesMenu.map((item, index) => (
                <div key={index} className="menu-item" onClick={() => setSelectedProduct(item)}>
                  <img src={item.img} alt={item.name} />
                  <div className="menu-item-content">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                    <div className="menu-item-price">£{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h3 className="card-title">Want to Order or Have Questions?</h3>
            <p className="card-text" style={{ marginBottom: '1.5rem' }}>
              Chat with us on WhatsApp for instant orders, inquiries, or special requests!
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%20Crema%20Café!%20☕%20I'd%20like%20to%20order%20from%20the%20menu.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

// ========================================
// LOCATIONS PAGE WITH MAPS
// ========================================
const LocationsPage = () => {
  const whatsappNumber = "447424366129";

  const locations = [
    {
      city: 'London',
      image: IMAGES.londonCafe,
      outlets: [
        {
          name: 'Shoreditch',
          address: '45 Great Eastern Street, London EC2A 3EP',
          phone: '+44 20 1234 5678',
          hours: 'Mon-Fri: 7am-8pm, Sat-Sun: 8am-6pm',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4!2d-0.0799!3d51.5252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzMwLjciTiAwwrAwNCc0Ny42Ilc!5e0!3m2!1sen!2suk!4v1234567890'
        },
        {
          name: 'Covent Garden',
          address: '12 King Street, London WC2E 8JD',
          phone: '+44 20 1234 5679',
          hours: 'Mon-Sun: 7am-9pm',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.1243!3d51.5128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzQ2LjEiTiAwwrAwNycyNy41Ilc!5e0!3m2!1sen!2suk!4v1234567890'
        },
      ],
    },
    {
      city: 'Manchester',
      image: IMAGES.manchesterCafe,
      outlets: [
        {
          name: 'Northern Quarter',
          address: '23 Oldham Street, Manchester M1 1JG',
          phone: '+44 161 234 5678',
          hours: 'Mon-Fri: 7am-8pm, Sat-Sun: 8am-7pm',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.2!2d-2.2361!3d53.4839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI5JzAyLjAiTiAywrAxNCcxMC4wIlc!5e0!3m2!1sen!2suk!4v1234567890'
        },
      ],
    },
    {
      city: 'Birmingham',
      image: IMAGES.birminghamCafe,
      outlets: [
        {
          name: 'Jewellery Quarter',
          address: '67 Vyse Street, Birmingham B18 6HA',
          phone: '+44 121 234 5678',
          hours: 'Mon-Fri: 7am-7pm, Sat-Sun: 8am-6pm',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.8!2d-1.9089!3d52.4892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI5JzIxLjEiTiAxwrA1NCczMi4wIlc!5e0!3m2!1sen!2suk!4v1234567890'
        },
      ],
    },
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="hero hero-small" style={{ backgroundImage: `linear-gradient(rgba(62, 39, 35, 0.7), rgba(93, 64, 55, 0.8)), url('${IMAGES.people}')` }}>
        <div className="hero-content">
          <h1>Our Locations</h1>
          <p className="subtitle">Find Your Nearest Crema Café</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {locations.map((cityData, index) => (
            <div key={index} style={{ marginBottom: '4rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <img src={cityData.image} alt={cityData.city} style={{ width: '100%', maxWidth: '800px', height: '300px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1rem' }} />
                <h2 style={{ fontSize: '2rem', color: 'var(--coffee-dark)' }}>{cityData.city}</h2>
              </div>
              <div className="grid grid-2">
                {cityData.outlets.map((outlet, idx) => (
                  <div key={idx} className="location-card">
                    <h3>{outlet.name}</h3>
                    
                    <div className="map-container">
                      <iframe
                        src={outlet.mapUrl}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${outlet.name}`}
                      />
                    </div>

                    <div className="location-info">
                      <div className="location-info-item">
                        <MapPin size={18} />
                        <span>{outlet.address}</span>
                      </div>
                      <div className="location-info-item">
                        <Phone size={18} />
                        <span>{outlet.phone}</span>
                      </div>
                      <div className="location-info-item">
                        <Clock size={18} />
                        <span>{outlet.hours}</span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hi%20Crema%20Café!%20☕%20I'd%20like%20to%20visit%20${outlet.name}%20outlet.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
                    >
                      <MessageCircle size={18} />
                      Contact on WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// ========================================
// CATERING PAGE - ENHANCED
// ========================================
const CateringPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', event_type: '', guests: '', date: '', message: '',
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `🎉 Catering Inquiry - Crema Café\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📞 Phone: ${formData.phone}\n🎊 Event Type: ${formData.event_type}\n👥 Guests: ${formData.guests}\n📅 Date: ${formData.date}\n💬 Message: ${formData.message}`;
    window.open(`https://wa.me/447424366129?text=${encodeURIComponent(message)}`, '_blank');
  };

  const testimonials = [
    {
      text: "Crema Café catered our annual conference for 200 attendees. The coffee station was a huge hit, and the breakfast spread was phenomenal. Professional service from start to finish. We've used them for 3 years running!",
      author: 'Sarah Mitchell',
      role: 'Events Manager, TechCorp London'
    },
    {
      text: "We use Crema for all our client meetings. The quality is consistently excellent, and their team always goes above and beyond. The barista service particularly impresses our high-profile clients. Highly recommend!",
      author: 'James Peterson',
      role: 'Managing Director, Sterling Consultants'
    },
    {
      text: "Perfect for our weekly board meetings. The ordering process is simple, delivery is always on time, and the coffee quality matches what we'd get in their cafés. Game changer for our productivity!",
      author: 'Emma Williams',
      role: 'Operations Lead, Innovate Digital'
    },
    {
      text: "Crema catered our product launch event for 150 guests. The presentation was stunning, food was delicious, and their team was incredibly professional. Many guests asked for their contact info!",
      author: 'Michael Chen',
      role: 'Marketing Director, FinTech Solutions'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="hero hero-small" style={{ backgroundImage: `linear-gradient(rgba(62, 39, 35, 0.7), rgba(93, 64, 55, 0.8)), url('${IMAGES.catering}')` }}>
        <div className="hero-content">
          <h1>Catering & Bulk Orders</h1>
          <p className="subtitle">Perfect Coffee for Every Event</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="content-section">
            <img src={IMAGES.cateringSetup} alt="Catering Setup" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '2rem' }} />
            
            <h3>Premium Corporate Catering Services</h3>
            <p>
              Elevate your corporate events, meetings, and gatherings with Crema Café's premium catering services. From coffee stations to full breakfast and lunch spreads, we bring café-quality experiences directly to your venue with professional service, expert baristas, and exceptional attention to detail.
            </p>
            <p>
              Whether you're hosting a small board meeting for 20 people or a large conference for 500 attendees, our experienced catering team will ensure your event is a memorable success. We handle everything from setup to cleanup, allowing you to focus on what matters most – your guests and your event objectives.
            </p>
            <p>
              Since 2018, we've catered over 1,000 corporate events across London, Manchester, and Birmingham, earning consistent 4.9-star reviews from businesses ranging from startups to FTSE 100 companies. Our commitment to quality, reliability, and exceptional service has made us the preferred catering partner for discerning organizations.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CREMA CAFÉ CATERING */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">Why Choose Crema Café Catering?</h2>
          <p className="section-subtitle">
            The difference between good catering and exceptional catering
          </p>

          <div className="grid grid-3">
            {[
              {
                icon: <Award size={32} />,
                title: 'Premium Quality',
                desc: 'Same exceptional coffee and food quality as our award-winning cafés. We never compromise on ingredients or preparation standards, even for large-scale events.'
              },
              {
                icon: <Users size={32} />,
                title: 'Professional Service',
                desc: 'Experienced catering team with certified baristas. Professional setup, attentive service during your event, and complete cleanup – all handled seamlessly.'
              },
              {
                icon: <Star size={32} />,
                title: 'Proven Track Record',
                desc: 'Over 1,000 successful events since 2018. Rated 4.9/5 stars by corporate clients. Trusted by leading UK companies for their most important gatherings.'
              },
              {
                icon: <Clock size={32} />,
                title: 'Reliable & Flexible',
                desc: '2-hour quote response time. Available 7 days a week. Last-minute modifications accepted up to 48 hours before your event. Backup planning included.'
              },
              {
                icon: <CheckCircle size={32} />,
                title: 'All-Inclusive Service',
                desc: 'No hidden fees or surprises. Our packages include setup, service, equipment, cleanup, and all disposables. What you see is what you pay.'
              },
              {
                icon: <Leaf size={32} />,
                title: 'Dietary Friendly',
                desc: 'Comprehensive accommodation for all dietary requirements including vegan, gluten-free, halal, kosher, and allergen-free options with clear labeling.'
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <div style={{ color: 'var(--soft-green)', marginBottom: '1rem' }}>{item.icon}</div>
                <h4 className="card-title" style={{ fontSize: '1.25rem' }}>{item.title}</h4>
                <p className="card-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Packages */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Our Catering Packages</h2>
          <p className="section-subtitle">
            Choose from our popular packages or create a custom menu
          </p>

          <div className="grid grid-3">
            {[
              { icon: <Coffee size={32} />, title: 'Coffee Stations', desc: 'Professional baristas with commercial espresso machines, premium single-origin beans, full milk alternative selection (oat, almond, soy, coconut), complete setup including branded cups, sugar, stirrers, napkins, and waste disposal' },
              { icon: <Package size={32} />, title: 'Breakfast Packages', desc: 'Fresh-baked pastries and croissants, assorted muffins and Danish pastries, seasonal fruit platters, Greek yogurt parfaits with house-made granola, fresh orange juice, tea selection, dietary accommodations for all requirements' },
              { icon: <Users size={32} />, title: 'Lunch Catering', desc: 'Gourmet sandwiches and artisan wraps, fresh seasonal salads with premium dressings, hot meal options (pasta, rice bowls), complete vegetarian and vegan menu, desserts and cookies, full beverage service including soft drinks' },
            ].map((item, index) => (
              <div key={index} className="card">
                <div style={{ color: 'var(--soft-green)', marginBottom: '1rem' }}>{item.icon}</div>
                <h4 className="card-title" style={{ fontSize: '1.25rem' }}>{item.title}</h4>
                <p className="card-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle">
            Clear packages with no hidden fees
          </p>

          <div className="grid grid-2">
            <div className="card">
              <h4 className="card-title">Coffee & Beverage Packages</h4>
              <div className="price-table">
                <div className="price-row">
                  <span className="price-label">Coffee Station (20-50 people)</span>
                  <span className="price-value">From £250</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Coffee Station (51-100 people)</span>
                  <span className="price-value">From £450</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Coffee Station (101-200 people)</span>
                  <span className="price-value">From £800</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Coffee Station (200+ people)</span>
                  <span className="price-value">Custom Quote</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Tea & Coffee Service (Per person)</span>
                  <span className="price-value">£3.50</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Premium Coffee Bar (4 hours)</span>
                  <span className="price-value">£600+</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h4 className="card-title">Food Packages</h4>
              <div className="price-table">
                <div className="price-row">
                  <span className="price-label">Light Breakfast (Per person)</span>
                  <span className="price-value">£8.50</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Full Breakfast (Per person)</span>
                  <span className="price-value">£12.50</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Lunch Package (Per person)</span>
                  <span className="price-value">£12.00 - £18.00</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Premium Lunch (Per person)</span>
                  <span className="price-value">£22.00</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Full Day Catering (Per person)</span>
                  <span className="price-value">£28.00 - £35.00</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Executive Catering (Per person)</span>
                  <span className="price-value">£40.00+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: '2rem' }}>
            <h4 className="card-title">Additional Services & Extras</h4>
            <div className="price-table">
              <div className="price-row">
                <span className="price-label">Professional Barista (Per hour)</span>
                <span className="price-value">£25</span>
              </div>
              <div className="price-row">
                <span className="price-label">Service Staff (Per hour)</span>
                <span className="price-value">£15 - £20</span>
              </div>
              <div className="price-row">
                <span className="price-label">Delivery & Setup (within 10 miles)</span>
                <span className="price-value">£50 - £100</span>
              </div>
              <div className="price-row">
                <span className="price-label">Delivery & Setup (10-25 miles)</span>
                <span className="price-value">£100 - £150</span>
              </div>
              <div className="price-row">
                <span className="price-label">Equipment Rental (espresso machine/day)</span>
                <span className="price-value">£100</span>
              </div>
              <div className="price-row">
                <span className="price-label">China Service Upgrade</span>
                <span className="price-value">+£2/person</span>
              </div>
              <div className="price-row">
                <span className="price-label">Weekend/Evening Premium</span>
                <span className="price-value">+15%</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--mocha)', marginTop: '1rem' }}>
              * Minimum order: 20 people. Volume discounts available for 100+ guests. All prices exclude VAT.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included - REDUCED POINTS */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">What's Included in Every Service</h2>
          <p className="section-subtitle">
            Comprehensive catering service with no hidden costs
          </p>

          <div className="grid grid-3">
            {[
              'Professional setup and presentation',
              'Certified baristas and service staff',
              'All equipment (cups, plates, cutlery)',
              'On-site service during event',
              'Complete cleanup and disposal',
              'Dietary accommodations (vegan, GF, halal)',
              'Branded packaging',
              'Flexible timing adjustments',
              '£5M liability insurance',
            ].map((item, index) => (
              <div key={index} style={{ padding: '1rem', background: 'var(--cream)', borderRadius: '0.5rem', display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                <CheckCircle size={18} color="var(--soft-green)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Menus */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">Sample Catering Menus</h2>
          <p className="section-subtitle">
            Popular packages customizable to your preferences
          </p>

          <div className="grid grid-2">
            <div className="card">
              <h4 className="card-title">Breakfast Package Options</h4>
              
              <h5 style={{ color: 'var(--coffee-dark)', marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Light Breakfast (£8.50/person)</h5>
              <ul className="detail-list">
                <li>Assorted pastries and croissants</li>
                <li>Seasonal fruit platter</li>
                <li>Fresh orange juice</li>
                <li>Coffee & tea service</li>
              </ul>

              <h5 style={{ color: 'var(--coffee-dark)', marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Full Breakfast (£12.50/person)</h5>
              <ul className="detail-list">
                <li>Breakfast wraps or sandwiches</li>
                <li>Pastries and muffins</li>
                <li>Yogurt parfaits with granola</li>
                <li>Fresh fruit platter</li>
                <li>Orange juice and soft drinks</li>
                <li>Premium coffee & tea service</li>
              </ul>
            </div>

            <div className="card">
              <h4 className="card-title">Lunch Package Options</h4>
              
              <h5 style={{ color: 'var(--coffee-dark)', marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Standard Lunch (£12.00/person)</h5>
              <ul className="detail-list">
                <li>Assorted sandwiches (3 varieties)</li>
                <li>Mixed green salad</li>
                <li>Crisps and snacks</li>
                <li>Fresh fruit</li>
                <li>Soft drinks</li>
              </ul>

              <h5 style={{ color: 'var(--coffee-dark)', marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.125rem' }}>Premium Lunch (£18.00/person)</h5>
              <ul className="detail-list">
                <li>Gourmet sandwiches & wraps (5 varieties)</li>
                <li>2 premium salads with dressings</li>
                <li>Hot option (pasta or rice bowl)</li>
                <li>Dessert selection</li>
                <li>Soft drinks & coffee service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS CAROUSEL - NO ARROW BUTTONS */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by leading UK businesses for exceptional catering
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ background: 'var(--cream)', padding: '3rem 2rem', borderRadius: '0.5rem', minHeight: '250px', position: 'relative' }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  style={{
                    display: index === currentTestimonial ? 'block' : 'none',
                    animation: index === currentTestimonial ? 'fadeIn 0.5s ease' : 'none'
                  }}
                >
                  <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--coffee-dark)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    "{testimonial.text}"
                  </p>
                  <div style={{ fontWeight: 'bold', color: 'var(--mocha)', marginBottom: '0.25rem' }}>
                    {testimonial.author}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--mocha)', opacity: 0.7 }}>
                    {testimonial.role}
                  </div>
                </div>
              ))}
            </div>

            {/* Only Dot Indicators - NO ARROW BUTTONS */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: index === currentTestimonial ? '30px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: index === currentTestimonial ? 'var(--soft-green)' : 'var(--beige)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request Quote Form */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">Request a Catering Quote</h2>
          <p className="section-subtitle">
            Get a detailed quote within 2 hours
          </p>

          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '1.125rem', color: 'var(--mocha)', marginBottom: '2rem', lineHeight: '1.8' }}>
                Fill out the form and we'll get back to you within 2 hours with a detailed quote tailored to your specific event requirements. For urgent requests or immediate assistance, use our WhatsApp button for instant response from our catering team.
              </p>
              <img src={IMAGES.cateringEvent} alt="Catering Event" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1.5rem' }} />
              
              <div style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--beige)' }}>
                <h4 style={{ color: 'var(--coffee-dark)', marginBottom: '1rem' }}>📞 Need Immediate Help?</h4>
                <p style={{ color: 'var(--mocha)', marginBottom: '1rem' }}>
                  Our catering team is available Mon-Fri 9am-6pm for phone consultations and same-day quotes.
                </p>
                <a
                  href="https://wa.me/447424366129?text=Hi%20Crema%20Café!%20🎉%20I%20need%20catering%20for%20an%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp Now
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title" style={{ marginBottom: '1.5rem' }}>Catering Inquiry Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input type="text" className="form-input" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your name" />
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-input" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input type="tel" className="form-input" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+44 7XXX XXXXXX" />
                </div>

                <div className="form-group">
                  <label className="form-label">Event Type *</label>
                  <select className="form-select" required value={formData.event_type} onChange={(e) => setFormData({...formData, event_type: e.target.value})}>
                    <option value="">Select event type</option>
                    <option value="Corporate Meeting">Corporate Meeting</option>
                    <option value="Conference">Conference</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Private Party">Private Party</option>
                    <option value="Training Session">Training Session</option>
                    <option value="Product Launch">Product Launch</option>
                    <option value="Networking Event">Networking Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Number of Guests *</label>
                    <input type="number" className="form-input" required value={formData.guests} onChange={(e) => setFormData({...formData, guests: e.target.value})} placeholder="Min. 20" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Event Date *</label>
                    <input type="date" className="form-input" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Event Requirements & Special Requests</label>
                  <textarea className="form-textarea" placeholder="Tell us about dietary needs, timing, setup preferences, budget..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                </div>

                <button type="submit" className="btn-submit">
                  <MessageCircle size={20} />
                  Send Inquiry on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ========================================
// FRANCHISE PAGE - EXTENSIVELY ENHANCED
// ========================================
const FranchisePage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', city: '', experience: '', investment: '', message: '',
  });
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `🏆 Franchise Application - Crema Café\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📞 Phone: ${formData.phone}\n🏙️ City: ${formData.city}\n💼 Experience: ${formData.experience}\n💰 Investment: ${formData.investment}\n💬 Message: ${formData.message}`;
    window.open(`https://wa.me/447424366129?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      text: "Opening a Crema Café franchise was the best business decision I've made. The training was comprehensive, the support is ongoing, and the brand recognition brought customers from day one. We broke even in 16 months and are now planning our second location!",
      author: 'David Thompson',
      role: 'Franchisee - Manchester Northern Quarter (Opened 2022)'
    },
    {
      text: "I came from corporate with zero café experience. Crema's training gave me all the skills I needed. The head office team is always available, and the business model just works. Highly profitable and personally rewarding.",
      author: 'Priya Sharma',
      role: 'Franchisee - Birmingham Jewellery Quarter (Opened 2021)'
    },
    {
      text: "The support system is unmatched. From site selection to grand opening, they were with us every step. Now 18 months in, we're exceeding projections and the community loves us. Already planning location #2!",
      author: 'Michael O\'Brien',
      role: 'Franchisee - London Covent Garden (Opened 2023)'
    },
    {
      text: "As a multi-unit franchisee, Crema stands out for operational support and profitability. Clear systems, great margins, and a brand customers trust. My third location opens next month!",
      author: 'Lisa Wong',
      role: 'Multi-Unit Franchisee - 2 Locations (Since 2020)'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    { 
      q: 'Do I need previous café or hospitality experience?', 
      a: 'No! While experience is beneficial, we provide comprehensive 4-week training that covers everything you need to know. Many of our most successful franchisees came from completely different industries including corporate, retail, tech, and finance backgrounds. Our training program is designed to take you from zero to expert.' 
    },
    { 
      q: 'How long does it take to open a Crema Café?', 
      a: 'From signing the franchise agreement to grand opening typically takes 6-7 months. This includes site selection (1-2 months), design and build-out (2-3 months), equipment installation (2-4 weeks), training (1 month), and pre-opening preparations (2-4 weeks). Timeline can vary based on property availability.' 
    },
    { 
      q: 'Can I own multiple Crema Café locations?', 
      a: 'Absolutely! We actively encourage multi-unit ownership. After successfully operating your first location for 12 months and meeting performance standards, you can apply for additional territories with 20% reduced franchise fees and expedited approval. We offer multi-unit development agreements for committed partners.' 
    },
    { 
      q: 'What ongoing support do I receive?', 
      a: 'You receive comprehensive ongoing support including: dedicated franchise manager with weekly check-ins, 24/7 technical helpdesk, quarterly business reviews, monthly performance benchmarking, ongoing marketing materials, menu updates, access to franchisee network, field support visits, and crisis management assistance.' 
    },
    { 
      q: 'Are financing options available?', 
      a: 'Yes! We have established relationships with major UK banks including HSBC, Barclays, and NatWest. We provide introduction letters, detailed financial projections, and comprehensive documentation to support your loan application. Typical approval rate is 70-80% for qualified applicants with good credit history.' 
    },
    { 
      q: 'What is the franchise agreement term?', 
      a: 'The initial franchise agreement is for 10 years with an option to renew for an additional 10 years (potentially multiple renewals). Renewal is subject to meeting performance standards and maintaining brand compliance. The renewal fee is typically 25% of the initial franchise fee.' 
    },
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="hero hero-small" style={{ backgroundImage: `linear-gradient(rgba(62, 39, 35, 0.7), rgba(93, 64, 55, 0.8)), url('${IMAGES.franchise}')` }}>
        <div className="hero-content">
          <h1>Franchise Opportunity</h1>
          <p className="subtitle">Join the Crema Café Family</p>
        </div>
      </section>

      {/* Intro Section - NO FAST FACTS BOX */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="content-section">
            <img src={IMAGES.businessMeeting} alt="Business Meeting" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '2rem' }} />
            
            <h3>Why Choose Crema Café Franchise?</h3>
            <p>
              Be part of a thriving brand that's redefining the café experience across the UK. With proven systems, comprehensive training, and ongoing support, Crema Café offers a rewarding business opportunity for passionate entrepreneurs who share our commitment to excellence and community building.
            </p>
            <p>
              Since launching our franchise program in 2020, we've helped ambitious business owners successfully open and operate profitable café locations in prime UK markets. Our franchisees benefit from our established brand recognition, operational excellence, robust support infrastructure, and a proven business model that delivers consistent results with average monthly revenue of £45k-£65k per outlet.
            </p>
            <p>
              With the UK coffee shop market valued at £4.3 billion and growing at 7.9% annually, there's never been a better time to join the specialty coffee revolution. Crema Café franchisees are positioned to capture this growth with a premium brand, loyal customer base, and comprehensive support system that sets you up for long-term success with expected ROI in just 18-24 months.
            </p>
          </div>

          <div className="grid grid-2" style={{ marginTop: '3rem' }}>
            {[
              { icon: <Star size={28} />, title: 'Proven Business Model', desc: 'Track record of profitability across 5 locations with average monthly revenue £45k-£65k per outlet and industry-leading margins of 18-22%.' },
              { icon: <GraduationCap size={28} />, title: 'Comprehensive Training', desc: '4-week intensive program at London HQ covering barista certification, operations, and business management with ongoing support.' },
              { icon: <TrendingUp size={28} />, title: 'Marketing Support', desc: 'National campaigns, local toolkit, social media calendar, SEO optimization, and £10k grand opening package.' },
              { icon: <Package size={28} />, title: 'Supply Chain Access', desc: 'Exclusive signature blend, supplier rates 15-20% below market, centralized ordering, and equipment maintenance network.' },
            ].map((item, index) => (
              <div key={index} className="card">
                <div style={{ color: 'var(--soft-green)', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h4 className="card-title" style={{ fontSize: '1.25rem' }}>{item.title}</h4>
                <p className="card-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">Complete Investment Breakdown</h2>
          <p className="section-subtitle">
            Transparent financial requirements with detailed cost analysis
          </p>

          <div className="grid grid-2">
            <div className="card">
              <h4 className="card-title">Initial Investment Components</h4>
              <div className="price-table">
                <div className="price-row">
                  <span className="price-label">Initial Franchise Fee</span>
                  <span className="price-value">£25,000 - £35,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Commercial Espresso Machines</span>
                  <span className="price-value">£25,000 - £35,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Additional Equipment</span>
                  <span className="price-value">£15,000 - £25,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Interior Fit-out & Furniture</span>
                  <span className="price-value">£40,000 - £60,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">POS System & Technology</span>
                  <span className="price-value">£5,000 - £8,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Initial Inventory & Supplies</span>
                  <span className="price-value">£15,000 - £20,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Signage & Branding</span>
                  <span className="price-value">£8,000 - £12,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Working Capital (3 months)</span>
                  <span className="price-value">£30,000 - £40,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Training & Launch Support</span>
                  <span className="price-value">£5,000 - £10,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Legal & Professional Fees</span>
                  <span className="price-value">£5,000 - £8,000</span>
                </div>
                <div className="price-row" style={{ background: 'var(--soft-green)', color: 'white' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>Total Investment</span>
                  <span style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>£150,000 - £250,000</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h4 className="card-title">Ongoing Fees & Projections</h4>
              <div className="price-table">
                <div className="price-row">
                  <span className="price-label">Royalty Fee</span>
                  <span className="price-value">6% of monthly revenue</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Marketing Contribution</span>
                  <span className="price-value">2% of monthly revenue</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Technology Platform Fee</span>
                  <span className="price-value">£250/month</span>
                </div>
                <div className="price-row" style={{ background: 'var(--cream)' }}>
                  <span className="price-label" style={{ fontWeight: 'bold' }}>Expected Monthly Revenue</span>
                  <span className="price-value" style={{ fontWeight: 'bold' }}>£45,000 - £65,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Expected Monthly Costs</span>
                  <span className="price-value">£32,000 - £48,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Expected Monthly Profit</span>
                  <span className="price-value">£8,000 - £12,000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Profit Margin</span>
                  <span className="price-value">18% - 22%</span>
                </div>
                <div className="price-row">
                  <span className="price-label">ROI Timeline</span>
                  <span className="price-value">18-24 months</span>
                </div>
                <div className="price-row" style={{ background: 'var(--soft-green)', color: 'white' }}>
                  <span style={{ fontWeight: 'bold' }}>Annual Net Profit (Year 2+)</span>
                  <span style={{ fontWeight: 'bold' }}>£80,000 - £120,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Package - REDUCED POINTS */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Complete Franchise Support Package</h2>
          <p className="section-subtitle">
            Everything you need to succeed from launch to growth
          </p>

          <div className="grid grid-3">
            {[
              { 
                icon: <GraduationCap size={28} />, 
                title: 'Training & Education', 
                items: ['4-week intensive HQ training', 'SCA barista certification', '300+ page operations manual', 'Monthly webinars', 'Annual conference'] 
              },
              { 
                icon: <Building size={28} />, 
                title: 'Site Selection & Design', 
                items: ['Location analysis', 'Lease negotiation support', 'Store design & layout', 'Equipment procurement', 'Project management'] 
              },
              { 
                icon: <Coins size={28} />, 
                title: 'Financial & Legal', 
                items: ['Business plan template', '5-year projections', 'Bank introductions', 'Accounting system setup', 'Legal documentation'] 
              },
              { 
                icon: <BarChart3 size={28} />, 
                title: 'Marketing & Technology', 
                items: ['Cloud POS included', 'Social media library', '£10k launch campaign', 'Loyalty program', 'Website integration'] 
              },
              {
                icon: <Headphones size={28} />,
                title: 'Ongoing Support',
                items: ['Dedicated manager', '24/7 helpdesk', 'Quarterly reviews', 'Regional events', 'Menu innovation']
              },
              {
                icon: <Shield size={28} />,
                title: 'Quality Assurance',
                items: ['Regular audits', 'Mystery shoppers', 'Feedback system', 'Maintenance program', 'Brand monitoring']
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <div style={{ color: 'var(--soft-green)', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h4 className="card-title" style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>{item.title}</h4>
                <ul className="detail-list">
                  {item.items.map((listItem, idx) => (
                    <li key={idx}>{listItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">Franchise Journey Timeline</h2>
          <p className="section-subtitle">
            From application to grand opening – your step-by-step path
          </p>

          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div className="timeline">
              {[
                { title: 'Week 1-2: Application', desc: 'Submit application, financial screening, background check, business plan review' },
                { title: 'Week 3-4: Discovery Day', desc: 'Visit London HQ, meet management, tour locations, shadow operations, detailed Q&A' },
                { title: 'Week 5-6: Due Diligence', desc: 'Review FDD, legal consultation, financial verification, reference checks' },
                { title: 'Week 7-8: Agreement', desc: 'Sign franchise agreement, finalize investment, complete legal docs, welcome kit' },
                { title: 'Month 3-4: Site Selection', desc: 'Location scouting, demographic analysis, lease negotiation, site approval' },
                { title: 'Month 4-5: Design & Build', desc: 'Design finalization, contractor selection, equipment ordering, fit-out, branding' },
                { title: 'Month 5-6: Training', desc: '4-week intensive training, barista certification, operations, recruitment, POS' },
                { title: 'Month 6-7: Pre-Opening', desc: 'Staff training, inventory delivery, soft launch, inspections, marketing prep' },
                { title: 'Month 7+: Grand Opening', desc: 'Official launch with support, opening promotions, manager assigned, ongoing guidance' },
              ].map((step, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="card" style={{ marginBottom: '2rem' }}>
                <h4 className="card-title">Ideal Partner Profile</h4>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  We're looking for passionate entrepreneurs who will uphold our brand values:
                </p>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {[
                    'Passionate about coffee culture',
                    'Minimum £150k liquid capital',
                    'Entrepreneurial mindset',
                    'Hands-on approach',
                    'Strong leadership skills',
                    'Brand commitment',
                  ].map((item, index) => (
                    <div key={index} style={{ padding: '0.75rem', background: 'var(--cream)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle size={16} color="var(--soft-green)" />
                      <span style={{ fontSize: '0.95rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h4 className="card-title">Financing Options</h4>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Partnerships with major UK banks for qualified applicants:
                </p>
                <ul className="detail-list">
                  <li>Business loan guidance</li>
                  <li>Bank introductions (HSBC, Barclays, NatWest)</li>
                  <li>Equipment leasing options</li>
                  <li>Franchise-specific programs</li>
                  <li>70-80% approval rate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES CAROUSEL - NO ARROW BUTTONS */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title">Franchisee Success Stories</h2>
          <p className="section-subtitle">
            Real stories from franchise owners across the UK
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ background: 'var(--cream)', padding: '3rem 2rem', borderRadius: '0.5rem', minHeight: '250px', position: 'relative' }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  style={{
                    display: index === currentTestimonial ? 'block' : 'none',
                    animation: index === currentTestimonial ? 'fadeIn 0.5s ease' : 'none'
                  }}
                >
                  <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--coffee-dark)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    "{testimonial.text}"
                  </p>
                  <div style={{ fontWeight: 'bold', color: 'var(--mocha)', marginBottom: '0.25rem' }}>
                    {testimonial.author}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--mocha)', opacity: 0.7 }}>
                    {testimonial.role}
                  </div>
                </div>
              ))}
            </div>

            {/* Only Dot Indicators - NO ARROW BUTTONS */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: index === currentTestimonial ? '30px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: index === currentTestimonial ? 'var(--soft-green)' : 'var(--beige)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DROPDOWN FAQs - ONLY 6 */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Common questions about becoming a Crema Café franchisee
          </p>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  border: '1px solid var(--beige)',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  overflow: 'hidden',
                  transition: 'all 0.3s'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: openFaq === index ? 'var(--cream)' : 'white',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background 0.3s'
                  }}
                >
                  <span style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--coffee-dark)', paddingRight: '1rem' }}>
                    {faq.q}
                  </span>
                  <span style={{ 
                    fontSize: '1.5rem', 
                    color: 'var(--soft-green)',
                    transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                    flexShrink: 0
                  }}>
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', animation: 'slideDown 0.3s ease' }}>
                    <p style={{ color: 'var(--mocha)', opacity: 0.8, lineHeight: '1.6', fontSize: '1rem' }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--coffee-dark)', marginBottom: '1.5rem' }}>
                Start Your Franchise Journey
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--mocha)', marginBottom: '2rem', lineHeight: '1.8' }}>
                Ready to bring Crema Café to your community? Our franchise development team will contact you within 24 hours to discuss the opportunity in detail and answer all your questions.
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--mocha)', marginBottom: '2rem', lineHeight: '1.8' }}>
                We carefully review each application. Strong applications demonstrate passion for coffee culture, clear business vision, and alignment with our brand values.
              </p>
              <img src={IMAGES.franchiseSupport} alt="Support" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1.5rem' }} />
              
              <div style={{ background: 'var(--cream)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--beige)' }}>
                <h4 style={{ color: 'var(--coffee-dark)', marginBottom: '1rem' }}>📞 Speak to Franchise Team</h4>
                <p style={{ color: 'var(--mocha)', marginBottom: '1rem' }}>
                  Questions before applying? Our team is available Mon-Fri 9am-6pm for confidential discussions.
                </p>
                <a
                  href="https://wa.me/447424366129?text=Hi%20Crema%20Café!%20🏆%20I'm%20interested%20in%20your%20franchise%20opportunity."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp Now
                </a>
              </div>
            </div>

            <div className="card">
              <h3 className="card-title" style={{ marginBottom: '1.5rem' }}>Franchise Application</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" className="form-input" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="John Smith" />
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-input" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="john@email.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input type="tel" className="form-input" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+44 7XXX XXXXXX" />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred City *</label>
                  <select className="form-select" required value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})}>
                    <option value="">Select location</option>
                    <option value="London">London</option>
                    <option value="Manchester">Manchester</option>
                    <option value="Birmingham">Birmingham</option>
                    <option value="Leeds">Leeds</option>
                    <option value="Liverpool">Liverpool</option>
                    <option value="Bristol">Bristol</option>
                    <option value="Edinburgh">Edinburgh</option>
                    <option value="Glasgow">Glasgow</option>
                    <option value="Other">Other UK City</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Business Experience *</label>
                  <select className="form-select" required value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})}>
                    <option value="">Select experience</option>
                    <option value="First-time entrepreneur">First-time entrepreneur</option>
                    <option value="Hospitality experience">Hospitality experience</option>
                    <option value="Multi-unit operator">Multi-unit operator</option>
                    <option value="Retail experience">Retail experience</option>
                    <option value="Corporate background">Corporate background</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Investment Capacity *</label>
                  <select className="form-select" required value={formData.investment} onChange={(e) => setFormData({...formData, investment: e.target.value})}>
                    <option value="">Select range</option>
                    <option value="£100k-£150k">£100,000 - £150,000</option>
                    <option value="£150k-£200k">£150,000 - £200,000</option>
                    <option value="£200k-£300k">£200,000 - £300,000</option>
                    <option value="£300k+">£300,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Why Crema Café? *</label>
                  <textarea 
                    className="form-textarea" 
                    required 
                    placeholder="Share your story, experience, and vision..." 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ minHeight: '120px' }}
                  />
                </div>

                <button type="submit" className="btn-submit">
                  <MessageCircle size={20} />
                  Submit on WhatsApp
                </button>

                <p style={{ fontSize: '0.85rem', color: 'var(--mocha)', marginTop: '1rem', textAlign: 'center' }}>
                  By submitting, you agree to be contacted regarding franchise opportunities.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ========================================
// CONTACT PAGE WITH MAP
// ========================================
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `📧 Contact Form - Crema Café\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📞 Phone: ${formData.phone}\n📝 Subject: ${formData.subject}\n💬 Message: ${formData.message}`;
    window.open(`https://wa.me/447424366129?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="hero hero-small" style={{ backgroundImage: `linear-gradient(rgba(62, 39, 35, 0.7), rgba(93, 64, 55, 0.8)), url('${IMAGES.contact}')` }}>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p className="subtitle">We'd Love to Hear From You</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ marginBottom: '3rem' }}>
            <h3 className="card-title" style={{ marginBottom: '1.5rem' }}>
              📍 Head Office - London Shoreditch
            </h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4!2d-0.0799!3d51.5252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzMwLjciTiAwwrAwNCc0Ny42Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Crema Café Head Office"
              />
            </div>
            <p className="card-text" style={{ fontSize: '1.125rem' }}>45 Great Eastern Street, London EC2A 3EP</p>
          </div>

          <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
            <div className="card">
              <Phone className="card-icon" />
              <h3 className="card-title">Phone</h3>
              <p className="card-text" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>+44 20 1234 5678</p>
              <p className="card-text" style={{ fontSize: '0.9rem' }}>Mon-Fri: 9am-6pm</p>
            </div>

            <div className="card">
              <Mail className="card-icon" />
              <h3 className="card-title">Email</h3>
              <p className="card-text" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>hello@cremacafe.co.uk</p>
              <p className="card-text" style={{ fontSize: '0.9rem' }}>We reply within 24 hours</p>
            </div>

            <div className="card">
              <MessageCircle className="card-icon" />
              <h3 className="card-title">WhatsApp</h3>
              <p className="card-text" style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>+44 7424 366 129</p>
              <a
                href="https://wa.me/447424366129?text=Hi%20Crema%20Café!%20☕"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: '0.5rem', justifyContent: 'center', width: '100%', textDecoration: 'none' }}
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="card">
              <MapPin className="card-icon" />
              <h3 className="card-title">Locations</h3>
              <p className="card-text" style={{ marginBottom: '1rem' }}>London • Manchester • Birmingham</p>
              <Link to="/locations" className="btn btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center', width: '100%', textDecoration: 'none' }}>
                View All Outlets
              </Link>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input type="text" className="form-input" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-input" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>

              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input type="tel" className="form-input" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <select className="form-select" required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}>
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order/Menu Question">Order/Menu Question</option>
                    <option value="Catering">Catering</option>
                    <option value="Franchise">Franchise</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea className="form-textarea" required placeholder="How can we help you?" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
              </div>

              <button type="submit" className="btn-submit">
                <MessageCircle size={20} />
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// ========================================
// MAIN APP
// ========================================
function App() {
  return (
    <Router>
      <style>{styles}</style>
      <Navigation />
      <Chatbot />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

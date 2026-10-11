import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      type: 'YKS',
      grade: 12,
      joinDate: '2024-01-15',
      progress: 65,
      lastActivity: '2024-01-25',
      phone: '5551234567',
      email: 'ahmet@example.com'
    },
    {
      id: 2,
      name: 'Ayşe Demir',
      type: 'LGS',
      grade: 8,
      joinDate: '2024-02-01',
      progress: 48,
      lastActivity: '2024-01-24',
      phone: '5559876543',
      email: 'ayse@example.com'
    },
    {
      id: 3,
      name: 'Mehmet Kaya',
      type: 'Ara Sınıf',
      grade: 10,
      joinDate: '2024-01-20',
      progress: 72,
      lastActivity: '2024-01-25',
      phone: '5555555555',
      email: 'mehmet@example.com'
    }
  ]);

  const [exams, setExams] = useState([
    {
      id: 1,
      studentId: 1,
      examName: 'YKS Deneme Sınavı 1',
      date: '2024-01-20',
      nets: { turkish: 35, math: 28, science: 25, social: 22 },
      score: 1850,
      previousScore: 1750
    },
    {
      id: 2,
      studentId: 2,
      examName: 'LGS Deneme Sınavı 1',
      date: '2024-01-22',
      nets: { turkish: 42, math: 38, science: 35, social: 30 },
      score: 385,
      previousScore: 360
    },
    {
      id: 3,
      studentId: 1,
      examName: 'YKS Deneme Sınavı 2',
      date: '2024-01-25',
      nets: { turkish: 38, math: 32, science: 28, social: 25 },
      score: 1920,
      previousScore: 1850
    }
  ]);

  const [schedule, setSchedule] = useState([
    {
      id: 1,
      studentId: 1,
      date: '2024-01-26',
      tasks: [
        { id: 1, title: 'Matematik - Türev', duration: 120, subject: 'Matematik', completed: false },
        { id: 2, title: 'Türkçe - Edebiyat', duration: 90, subject: 'Türkçe', completed: true },
        { id: 3, title: 'Fizik - Optik', duration: 100, subject: 'Fen Bilimleri', completed: false }
      ]
    },
    {
      id: 2,
      studentId: 2,
      date: '2024-01-26',
      tasks: [
        { id: 1, title: 'Matematik - Kesirler', duration: 60, subject: 'Matematik', completed: true },
        { id: 2, title: 'Türkçe - Yazım Kuralları', duration: 45, subject: 'Türkçe', completed: false }
      ]
    }
  ]);

  const [packages, setPackages] = useState([
    {
      id: 1,
      name: 'Başlangıç',
      price: 499,
      period: '1 Ay',
      features: [
        'Öğrenci Takip',
        'Haftalık Program',
        'Deneme Sınav Analizi',
        'Temel Raporlar'
      ]
    },
    {
      id: 2,
      name: 'Standart',
      price: 999,
      period: '1 Ay',
      popular: true,
      features: [
        'Başlangıç Paketindeki Her Şey',
        'Video Takibi',
        'Soru Takibi',
        'Pomodoro Timer',
        'Öğrenci Mesajlaşma'
      ]
    },
    {
      id: 3,
      name: 'Profesyonel',
      price: 1499,
      period: '1 Ay',
      features: [
        'Standart Paketindeki Her Şey',
        'PDF Sınav Oluşturma',
        'Konu İlerleme Takibi',
        'Veli Raporları',
        '5 Öğrenci'n
      ]
    },
    {
      id: 4,
      name: 'Premium',
      price: 2499,
      period: '1 Ay',
      features: [
        'Profesyonel Paketindeki Her Şey',
        'Ayak İzi Aktivite Takibi',
        '15 Öğrenci',
        'Öncelikli Destek',
        'Özel Raporlar'
      ]
    },
    {
      id: 5,
      name: 'Kurumsal',
      price: 4999,
      period: '1 Ay',
      features: [
        'Premium Paketindeki Her Şey',
        'Sınırsız Öğrenci',
        'Admin Paneli',
        'Özel İstatistikler',
        'Dedicate Destek'
      ]
    },
    {
      id: 6,
      name: 'Yıllık Plan',
      price: 8999,
      period: '12 Ay',
      discount: '25% İndirim',
      features: [
        'Tüm Premium Özellikler',
        'Sınırsız Öğrenci',
        'Sınırsız Raporlar',
        'Özel Danışmanlık',
        'Ücretsiz Güncellemeler'
      ]
    }
  ]);

  return (
    <DataContext.Provider value={{
      students,
      setStudents,
      exams,
      setExams,
      schedule,
      setSchedule,
      packages,
      setPackages
    }}>
      {children}
    </DataContext.Provider>
  );
};

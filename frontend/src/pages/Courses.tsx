import { useState } from 'react';
import { SectionHeader } from '../components/layout/SectionHeader';
import { SearchBar } from '../components/ui/SearchBar';
import { ProgressCard } from '../components/ui/ProgressCard';
import { EmptyState } from '../components/ui/EmptyState';
import { BookOpen } from 'lucide-react';
import type { Course } from '../types';

// Mock Courses database
const ALL_MOCK_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Advanced Neural Networks & Deep Learning',
    description: 'Learn backpropagation, convolutional networks, and sequence modeling.',
    category: 'Artificial Intelligence',
    progress: 68,
    completedLessons: 17,
    totalLessons: 25,
    updatedAt: '2026-06-25T12:00:00Z',
  },
  {
    id: 'c2',
    title: 'Product Design Systems with Tailwind & Figma',
    description: 'Build responsive design frameworks and state variables for scale.',
    category: 'Design Systems',
    progress: 35,
    completedLessons: 7,
    totalLessons: 20,
    updatedAt: '2026-06-24T18:30:00Z',
  },
  {
    id: 'c3',
    title: 'FastAPI Backend Architecture & Security Patterns',
    description: 'Establish secure routers, dependencies, and token systems.',
    category: 'Backend Development',
    progress: 100,
    completedLessons: 12,
    totalLessons: 12,
    updatedAt: '2026-06-20T10:15:00Z',
  },
  {
    id: 'c4',
    title: 'React 19 Concurrent Features & Server Components',
    description: 'Master Suspense boundaries, actions hook patterns, and compiler integrations.',
    category: 'Frontend Development',
    progress: 0,
    completedLessons: 0,
    totalLessons: 15,
    updatedAt: '2026-06-18T09:00:00Z',
  },
  {
    id: 'c5',
    title: 'Introduction to Agentic AI and LLM Orchestration',
    description: 'Implement LangChain and auto-evals with Gemini and Claude models.',
    category: 'Artificial Intelligence',
    progress: 10,
    completedLessons: 1,
    totalLessons: 10,
    updatedAt: '2026-06-15T14:45:00Z',
  },
];

export const Courses: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Artificial Intelligence', 'Design Systems', 'Backend Development', 'Frontend Development'];

  // Filter items
  const filteredCourses = ALL_MOCK_COURSES.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                          course.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-8 flex-1">
      {/* Heading */}
      <SectionHeader
        title="My Learning Pathways"
        description="Access and track your ongoing courses or begin a new subject pathway."
      />

      {/* Controls: Search and Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by course name, topic, or description..."
        />
        
        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-pointer
                ${selectedCategory === cat
                  ? 'bg-purple-600 border-purple-500 text-white font-medium'
                  : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-zinc-200 hover:border-zinc-800'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <ProgressCard
              key={course.id}
              title={course.title}
              category={course.category}
              progress={course.progress}
              completedLessons={course.completedLessons}
              totalLessons={course.totalLessons}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={BookOpen}
          title="No courses found"
          description={`We couldn't find any learning modules matching "${search}" in "${selectedCategory}". Try widening your search filters.`}
          actionText="Clear Filters"
          onAction={() => {
            setSearch('');
            setSelectedCategory('All');
          }}
        />
      )}
    </div>
  );
};

'use client';

import { useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  FaLinkedinIn,
  FaTwitter,
  FaBehance,
  FaInstagram,
} from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { asset } from '@/lib/paths';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  initials?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

interface TeamShowcaseProps {
  members: TeamMember[];
}

export default function TeamShowcase({ members }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) =>
    setExpandedId((current) => (current === id ? null : id));

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-4 md:px-6 font-sans">
      {/* Photo grid */}
      <div className="flex gap-2 md:gap-3 flex-shrink-0 w-full md:w-auto">
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="flex-1 aspect-square md:flex-none md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
              onClick={toggleExpanded}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 mt-3 sm:mt-[56px] md:mt-[68px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="flex-1 aspect-square md:flex-none md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
              onClick={toggleExpanded}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-3 mt-1.5 sm:mt-[26px] md:mt-[32px]">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="flex-1 aspect-square md:flex-none md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
              onClick={toggleExpanded}
            />
          ))}
        </div>
      </div>

      {/* Names */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            isExpanded={expandedId === member.id}
            onHover={setHoveredId}
            onToggle={toggleExpanded}
          />
        ))}
      </div>
    </div>
  );
}

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
  onClick,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
  onClick: (id: string) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const initials =
    member.initials ??
    member.name
      .split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

  return (
    <button
      type="button"
      onClick={() => onClick(member.id)}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      aria-label={`Ver biografía de ${member.name}`}
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-300 bg-rule focus:outline-none focus-visible:ring-2 focus-visible:ring-ink',
        className,
        isDimmed ? 'opacity-60' : 'opacity-100',
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(member.image)}
        alt={member.name}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive
            ? 'grayscale(0) brightness(1)'
            : 'grayscale(1) brightness(0.95)',
        }}
        onError={(e) => {
          const el = e.currentTarget as HTMLImageElement;
          const parent = el.parentElement;
          el.style.display = 'none';
          if (parent && !parent.querySelector('[data-initials]')) {
            const ph = document.createElement('div');
            ph.setAttribute('data-initials', 'true');
            ph.className =
              'w-full h-full flex items-center justify-center font-serif text-2xl md:text-3xl text-ink/40';
            ph.textContent = initials;
            parent.appendChild(ph);
          }
        }}
      />
    </button>
  );
}

function MemberRow({
  member,
  hoveredId,
  isExpanded,
  onHover,
  onToggle,
}: {
  member: TeamMember;
  hoveredId: string | null;
  isExpanded: boolean;
  onHover: (id: string | null) => void;
  onToggle: (id: string) => void;
}) {
  const isHovered = hoveredId === member.id;
  const isActive = isHovered || isExpanded;
  const isDimmed = hoveredId !== null && !isHovered && !isExpanded;
  const showBio = (isHovered || isExpanded) && !!member.bio;
  const reduce = useReducedMotion();
  const hasSocial =
    member.social?.twitter ??
    member.social?.linkedin ??
    member.social?.instagram ??
    member.social?.behance;

  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(member.id);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onClick={() => onToggle(member.id)}
      onKeyDown={handleKey}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      className={cn(
        'cursor-pointer transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 rounded-sm py-1.5 md:py-0',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-ink w-5' : 'bg-ink/25 w-4',
          )}
        />
        <span
          className={cn(
            'text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-ink' : 'text-ink/80',
          )}
        >
          {member.name}
        </span>

        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-1.5 ml-0.5 transition-all duration-200',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none',
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 md:p-1 rounded text-muted hover:text-ink hover:bg-ink/10 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <FaTwitter size={10} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 md:p-1 rounded text-muted hover:text-ink hover:bg-ink/10 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={10} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 md:p-1 rounded text-muted hover:text-ink hover:bg-ink/10 transition-all duration-150 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={10} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 md:p-1 rounded text-muted hover:text-ink hover:bg-ink/10 transition-all duration-150 hover:scale-110"
                title="Behance"
              >
                <FaBehance size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      <p className="mt-1.5 pl-6 md:pl-[27px] text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
        {member.role}
      </p>

      <AnimatePresence initial={false}>
        {showBio && (
          <motion.div
            key="bio"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={reduce ? { height: 'auto', opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduce ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              duration: reduce ? 0 : 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden"
          >
            <div className="mt-3 pl-6 pr-2 md:pl-[27px] text-sm text-ink/70 leading-relaxed max-w-[460px] space-y-3">
              {member.bio.split(/\n\s*\n/).map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

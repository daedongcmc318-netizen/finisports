-- ============================================================
--  휘니스포츠 Google Drive 동영상 일괄 등록 (2026-10-22)
--  Supabase Dashboard → SQL Editor에 통째로 붙여넣고 Run
--
--  ⚠️ 주의: 기존 guide_videos 테이블의 모든 데이터를 삭제하고
--     Google Drive 영상 31개로 교체합니다.
-- ============================================================

-- 1. 기존 데이터 전부 삭제
DELETE FROM guide_videos;

-- 2. Google Drive 영상 31개 등록
INSERT INTO guide_videos (category, sort_order, title, youtube_url) VALUES
  -- ── 바로스파인 스트레칭 (14개) ───────────────────────
  ('barospine',  1, '#1 바로스파인 기본 스트레칭',          'https://drive.google.com/file/d/1acxDfbUP2SpgUkbjYO1Lcma0wKpRQ1nh/view?usp=sharing'),
  ('barospine',  2, '#2 바로스파인 사이드 스트레칭',        'https://drive.google.com/file/d/1FIq1M_ZIZmaF-i4mz_UaxrSWtiye325D/view?usp=sharing'),
  ('barospine',  3, '#3 바로스파인 복부 스트레칭',          'https://drive.google.com/file/d/1TH96Lku0t3ugdftkfkcLziVboLBlj2WM/view?usp=sharing'),
  ('barospine',  4, '#4 바로스파인 어깨·등 스트레칭',       'https://drive.google.com/file/d/1Dz_elSfTq5tN5zVuSRBublprTJWhf08t/view?usp=sharing'),
  ('barospine',  5, '#5 바로스파인 골반 스트레칭',          'https://drive.google.com/file/d/1T1PJQqrb8B0K-z2_cA8Cz7vDfyeZpW1p/view?usp=sharing'),
  ('barospine',  6, '#6 바로스파인 하체 스트레칭',          'https://drive.google.com/file/d/1CnyDU1OuZ0vIemhApxdZ7crrEPl2lMud/view?usp=sharing'),
  ('barospine',  7, '#7 바로스파인 햄스트링 스트레칭',      'https://drive.google.com/file/d/12eCt-B-1AXWZd3QD5Y9qiKqpK3JGnRnn/view?usp=sharing'),
  ('barospine',  8, '#8 바로스파인 릴리즈 스트레칭',        'https://drive.google.com/file/d/14NgyEoQSEZXEcSEnfvTOQVidjjhQ0H3L/view?usp=sharing'),
  ('barospine',  9, '#9 햄스트링 스트레칭',                 'https://drive.google.com/file/d/1RHPRLQ-P4UCxVoM7Zl9HlwwnAMEJhj0K/view?usp=sharing'),
  ('barospine', 10, '#10 전신 응용 동작',                   'https://drive.google.com/file/d/1zxUKKBVRjVS_GnWCtQgpxCEvP8wUr7Ph/view?usp=sharing'),
  ('barospine', 11, '#11 전신 스트레칭',                    'https://drive.google.com/file/d/1vs5j3vo6cgNWyjolznZlB-ZGV1lBCuZy/view?usp=sharing'),
  ('barospine', 12, '#12 흉추 스트레칭',                    'https://drive.google.com/file/d/1dLygcF8P5xYIgBd9aouSJz45OmkvRehI/view?usp=sharing'),
  ('barospine', 13, '#13 레벨매트 하체 스트레칭',           'https://drive.google.com/file/d/1OobqU9A7p2A8HqD_v3RxuOadmQGpdQtG/view?usp=sharing'),
  ('barospine', 14, '#14 레벨매트 릴리즈',                  'https://drive.google.com/file/d/13RxWinQ3npJ9YX0Gsypm2Q3G_Xeqiqjm/view?usp=sharing'),

  -- ── 바로스파인 운동법·홍보 (7개, 뒤쪽 배치) ──────────────
  ('barospine', 100, '바로스파인 운동법 #1 발마사지',        'https://drive.google.com/file/d/1eWyovExqg0CHtBQJOMU2MqpViqd4d9Oo/view?usp=sharing'),
  ('barospine', 101, '바로스파인 운동법 #4 고관절',          'https://drive.google.com/file/d/1zxi2XKHjGWc3UPoyyQy9pfCnuryDpfgm/view?usp=sharing'),
  ('barospine', 102, '바로스파인 운동법 #6 등 후면',         'https://drive.google.com/file/d/1YUoaYUc2-6qnl5cWcPDzAqj42Vq_rb9G/view?usp=sharing'),
  ('barospine', 103, '바로스파인 운동법 #7 레벨매트',        'https://drive.google.com/file/d/1AQ2om8OCmCohbn4VKsh1xEA2P2Gphabm/view?usp=sharing'),
  ('barospine', 104, '바로스파인 필라테스 운동법',           'https://drive.google.com/file/d/1yabl21f-RaQNATs9vLemnBucasiwm8w-/view?usp=sharing'),
  ('barospine', 105, '바로스파인 홍보 영상',                 'https://drive.google.com/file/d/1lXlnPlXi53vLz3M1RtzhvhcjHDCBzgeP/view?usp=sharing'),
  ('barospine', 106, '휘니 영문 소개 영상',                  'https://drive.google.com/file/d/1mEYjXsom2c7Jswwx0omgOFo6VaeYcako/view?usp=sharing'),

  -- ── 키즈 바로스파인 (10개) ───────────────────────────
  ('kids',  1, '키즈 바로스파인 #1 기본 스트레칭',   'https://drive.google.com/file/d/10vcuj44hVJxD_nGMyS9mwFKKEt4JSDRX/view?usp=sharing'),
  ('kids',  2, '키즈 바로스파인 #2 목 스트레칭',     'https://drive.google.com/file/d/1dfZY9SG-mI4FJqAgGPt9PvxwVpRi80vS/view?usp=sharing'),
  ('kids',  3, '키즈 바로스파인 #3 어깨 스트레칭',   'https://drive.google.com/file/d/1KQIyA9oYN8VDXXHe4XBMAne0Ke5vNRmb/view?usp=sharing'),
  ('kids',  4, '키즈 바로스파인 #4 가슴 스트레칭',   'https://drive.google.com/file/d/1eWC2IJYwX4j_OYbrunFuqxode-Kah_hD/view?usp=sharing'),
  ('kids',  5, '키즈 바로스파인 #5 하부 스트레칭',   'https://drive.google.com/file/d/1pSz17tI1b5zwOCou7Z7wA-EUFQcRA_Bs/view?usp=sharing'),
  ('kids',  6, '키즈 바로스파인 #6 복부 스트레칭',   'https://drive.google.com/file/d/18Kz0kiFZA_I46G9ifnNCl0oTuI1y5Ilw/view?usp=sharing'),
  ('kids',  7, '키즈 바로스파인 #7 옆구리 스트레칭', 'https://drive.google.com/file/d/1q892PXF4QKHYUbt2kivQfdvO9BELmwQc/view?usp=sharing'),
  ('kids',  8, '키즈 바로스파인 #8 다리 스트레칭',   'https://drive.google.com/file/d/11_YZZVTxyn08_tky0t_FrzmFSlJSGrCz/view?usp=sharing'),
  ('kids',  9, '키즈 바로스파인 #9 릴리즈 스트레칭', 'https://drive.google.com/file/d/15o21gSyu96HVMNx0MXnerozG2NRnAg4n/view?usp=sharing'),
  ('kids', 10, '키즈 바로스파인 #10 종아리 스트레칭','https://drive.google.com/file/d/1qGE_sbwV4tVnnuXn6q0wGEwJb-kM-oF9/view?usp=sharing');

-- 확인용
SELECT category, COUNT(*) AS cnt FROM guide_videos GROUP BY category ORDER BY category;

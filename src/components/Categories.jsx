const Categories = ({ category, setCategory }) => {
  return (
    <div className="categories">
      <div
        className={category === 'all' ? 'category selected' : 'category'}
        onClick={() => setCategory('all')}
      >
        All
      </div>
      <div
        className={category === 'remaining' ? 'category selected' : 'category'}
        onClick={() => setCategory('remaining')}
      >
        Remaining
      </div>
      <div
        className={category === 'completed' ? 'category selected' : 'category'}
        onClick={() => setCategory('completed')}
      >
        Completed
      </div>
    </div>
  );
};

export default Categories;
